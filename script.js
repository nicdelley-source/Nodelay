// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const siteHeader = document.querySelector(".site-header");

if (navToggle && siteHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close mobile menu after tapping a link
  document.querySelectorAll("#mobileNav a").forEach((link) => {
    link.addEventListener("click", () => {
      siteHeader.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Simple client-side handling for the two signup forms (no backend wired up yet)
function handleSignupForm(formId, emailId, noteId) {
  const form = document.getElementById(formId);
  const email = document.getElementById(emailId);
  const note = document.getElementById(noteId);

  if (!form || !email || !note) return;

  const defaultNote = note.textContent;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!email.value || !email.checkValidity()) {
      note.textContent = "Please enter a valid email address.";
      note.style.color = "#f87171";
      return;
    }

    note.textContent = `Thanks! We'll be in touch at ${email.value}.`;
    note.style.color = "";
    form.reset();

    setTimeout(() => {
      note.textContent = defaultNote;
    }, 5000);
  });
}

handleSignupForm("heroForm", "heroEmail", "heroNote");
handleSignupForm("ctaForm", "ctaEmail", "ctaNote");
