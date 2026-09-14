import { useEffect } from "react";
import * as THREE from "three";

const CODE_ELEMENTS = ["<div>", "const", "function", "{ }", "=>", "return", "<span>", "export", "import", "<svg>", "React", "JSX", "API", "fetch"];
const COLORS = ["#5FF0C0", "#00D9FF", "#D946EF", "#EC4899", "#FF8C00", "#06B6D4", "#10B981"];

/**
 * Floating code-snippet particle field for the hero background.
 * Mounts into `containerRef`, tears itself down completely on unmount
 * (geometries, materials, textures, renderer, listeners) so remounts
 * (e.g. React StrictMode, HMR) never leak a second WebGL context.
 */
export default function useHeroScene(containerRef, { reducedMotion = false } = {}) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = container.clientWidth < 640;
    const particleCount = isMobile ? 28 : 60;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 80;
    scene.fog = new THREE.Fog(0x0b4536, 250, 450);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const particles = [];
    const disposables = [];

    for (let i = 0; i < particleCount; i++) {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      ctx.shadowColor = color;
      ctx.shadowBlur = 40;
      ctx.fillStyle = color;
      ctx.font = "bold 28px Space Grotesk";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(CODE_ELEMENTS[i % CODE_ELEMENTS.length], 128, 128);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(material);

      sprite.position.set((Math.random() - 0.5) * 280, (Math.random() - 0.5) * 220, (Math.random() - 0.5) * 200);
      sprite.scale.set(15, 15, 1);
      sprite.userData = {
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.4,
      };

      scene.add(sprite);
      particles.push(sprite);
      disposables.push(texture, material);
    }

    const lights = [
      new THREE.PointLight(0x5ff0c0, 1.5, 400),
      new THREE.PointLight(0x00d9ff, 1.3, 380),
      new THREE.PointLight(0xd946ef, 1.2, 350),
    ];
    lights[0].position.set(100, 80, 100);
    lights[1].position.set(-100, -80, 80);
    lights[2].position.set(80, -100, 40);
    lights.forEach((l) => scene.add(l));
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    let frameId = null;

    function renderFrame() {
      const time = Date.now() * 0.0008;
      particles.forEach((particle) => {
        particle.position.x += particle.userData.vx;
        particle.position.y += particle.userData.vy;
        particle.position.z += particle.userData.vz;

        if (particle.position.x > 160) particle.position.x = -160;
        if (particle.position.x < -160) particle.position.x = 160;
        if (particle.position.y > 140) particle.position.y = -140;
        if (particle.position.y < -140) particle.position.y = 140;
        if (particle.position.z > 120) particle.position.z = -120;
        if (particle.position.z < -120) particle.position.z = 120;

        particle.material.opacity = 0.6 + Math.sin(time * 1.5) * 0.3;
      });
      renderer.render(scene, camera);
    }

    function animate() {
      frameId = requestAnimationFrame(animate);
      renderFrame();
    }

    if (reducedMotion) {
      renderFrame();
    } else {
      animate();
    }

    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      if (reducedMotion) renderFrame();
    });
    resizeObserver.observe(container);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      disposables.forEach((d) => d.dispose && d.dispose());
      lights.forEach((l) => l.dispose && l.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [containerRef, reducedMotion]);
}
