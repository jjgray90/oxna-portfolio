const toggleNav = () => {
  const nav = document.getElementById("nav-links");
  if (nav.classList.contains("nav__nav-links--mobile")) {
    nav.classList.remove("nav__nav-links--mobile");
  } else {
    nav.classList.add("nav__nav-links--mobile");
  }
};
