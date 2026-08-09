const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

function closeNavigation() {
  siteNav?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const open = siteNav?.classList.toggle("open") ?? false;
  navToggle.setAttribute("aria-expanded", String(open));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
