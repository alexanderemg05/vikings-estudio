export const scrollToSection = (id: string) => {
  const offsets: Record<string, number> = {
    services: 0.1,
    portfolio: 40,
    about: -60,
    contact: 1
  };

  const el = document.getElementById(id);
  if (!el) return;

  const offset = offsets[id] || 100;

  const y =
    el.getBoundingClientRect().top +
    window.scrollY -
    offset;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
};