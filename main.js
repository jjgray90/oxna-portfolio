const toggleNav = () => {
  const nav = document.getElementById("nav-links");
  const intro = document.getElementById("intro");
  
  if (intro.classList.contains("intro--mobile-close")) {
    intro.classList.remove("intro--mobile-close");
    intro.classList.add("intro--mobile-open");
    nav.classList.add("nav__nav-links--mobile");
  } else {
    intro.classList.add("intro--mobile-close");
    intro.classList.remove("intro--mobile-open");
  }
};
