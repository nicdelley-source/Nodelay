import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CUBE_FACES } from "../lib/data.js";

function createFaceTexture(config) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, config.colorStart);
  gradient.addColorStop(1, config.colorEnd);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = "rgba(255,255,255,0.25)";
  ctx.lineWidth = 6;
  ctx.strokeRect(3, 3, 506, 506);

  if (config.isLogo) {
    ctx.shadowColor = "#5FF0C0";
    ctx.shadowBlur = 50;
    ctx.fillStyle = "rgba(95, 240, 192, 0.15)";
    ctx.beginPath();
    ctx.arc(256, 256, 170, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 26;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(190, 180);
    ctx.lineTo(280, 256);
    ctx.lineTo(190, 332);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(280, 180);
    ctx.lineTo(370, 256);
    ctx.lineTo(280, 332);
    ctx.globalAlpha = 0.55;
    ctx.stroke();
    ctx.globalAlpha = 1;

    ctx.font = "600 34px Space Grotesk, sans-serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText("NoDelay", 256, 430);
  } else {
    ctx.font = "bold 130px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(0,0,0,0.25)";
    ctx.shadowBlur = 20;
    ctx.fillText(config.icon, 256, 220);

    ctx.shadowBlur = 0;
    ctx.font = "600 46px Space Grotesk, sans-serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(config.label, 256, 340);

    ctx.font = "500 26px Space Grotesk, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.fillText(config.sub, 256, 385);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

/**
 * Interactive, draggable 3D cube. Each face navigates to a section of the
 * page (via onNavigate) when clicked. Handles drag-to-rotate, momentum,
 * idle auto-rotation, and tears every three.js resource down on unmount.
 */
export default function useCubeScene(containerRef, { onNavigate, reducedMotion = false } = {}) {
  const onNavigateRef = useRef(onNavigate);
  onNavigateRef.current = onNavigate;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const light1 = new THREE.PointLight(0x5ff0c0, 1.4, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    const light2 = new THREE.PointLight(0x00d9ff, 1, 100);
    light2.position.set(-5, -3, 4);
    scene.add(light2);

    const textures = CUBE_FACES.map(createFaceTexture);
    const materials = textures.map(
      (map) => new THREE.MeshStandardMaterial({ map, roughness: 0.35, metalness: 0.15 })
    );
    const geometry = new THREE.BoxGeometry(2.6, 2.6, 2.6);
    const cube = new THREE.Mesh(geometry, materials);
    cube.rotation.x = 0.4;
    cube.rotation.y = 0.6;
    scene.add(cube);

    let isDragging = false;
    let hasInteracted = false;
    let previousPos = { x: 0, y: 0 };
    let velocity = { x: 0.004, y: 0.006 };

    function getPointerPos(e) {
      if (e.touches && e.touches.length) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    }

    function onDragStart(e) {
      isDragging = true;
      hasInteracted = true;
      previousPos = getPointerPos(e);
    }

    function onDragMove(e) {
      if (!isDragging) return;
      const pos = getPointerPos(e);
      const deltaX = pos.x - previousPos.x;
      const deltaY = pos.y - previousPos.y;

      cube.rotation.y += deltaX * 0.01;
      cube.rotation.x += deltaY * 0.01;

      velocity = { x: deltaY * 0.0006, y: deltaX * 0.0006 };
      previousPos = pos;
    }

    function onDragEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      const moved = Math.abs(velocity.x) + Math.abs(velocity.y);
      if (moved < 0.002) handleClick(e);
    }

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function handleClick(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      const clientPos = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0] : e;
      pointer.x = ((clientPos.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((clientPos.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObject(cube);
      if (intersects.length > 0) {
        const target = CUBE_FACES[intersects[0].face.materialIndex].target;
        onNavigateRef.current?.(target, cube);
      }
    }

    container.addEventListener("mousedown", onDragStart);
    window.addEventListener("mousemove", onDragMove);
    window.addEventListener("mouseup", onDragEnd);
    container.addEventListener("touchstart", onDragStart, { passive: true });
    container.addEventListener("touchmove", onDragMove, { passive: true });
    container.addEventListener("touchend", onDragEnd);

    let frameId = null;

    function tick() {
      frameId = requestAnimationFrame(tick);

      if (!isDragging) {
        if (!hasInteracted) {
          cube.rotation.y += 0.006;
          cube.rotation.x += 0.002;
        } else {
          cube.rotation.x += velocity.x;
          cube.rotation.y += velocity.y;
          velocity = { x: velocity.x * 0.95, y: velocity.y * 0.95 };
        }
      }

      light1.intensity = 1.4 + Math.sin(Date.now() * 0.001) * 0.3;
      renderer.render(scene, camera);
    }

    if (reducedMotion) {
      renderer.render(scene, camera);
    } else {
      tick();
    }

    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      if (reducedMotion) renderer.render(scene, camera);
    });
    resizeObserver.observe(container);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      container.removeEventListener("mousedown", onDragStart);
      window.removeEventListener("mousemove", onDragMove);
      window.removeEventListener("mouseup", onDragEnd);
      container.removeEventListener("touchstart", onDragStart);
      container.removeEventListener("touchmove", onDragMove);
      container.removeEventListener("touchend", onDragEnd);

      geometry.dispose();
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [containerRef, reducedMotion]);
}
