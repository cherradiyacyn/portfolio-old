// handlers
handleMenuDisplay = () => {
  closer.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  body.classList.toggle("scroll-disable");
  hamburger__img.setAttribute("src", "/static/img/icon/close.svg");
  hamburger.setAttribute(
    "style",
    "transition: all 0.3s ease-out; background-color: var(--clr-blue-dark);"
  );
  if (menu.classList.contains("hidden")) {
    hamburger__img.setAttribute("src", "/static/img/icon/menu.svg");
    hamburger.setAttribute(
      "style",
      "transition: all 0.3s ease-out; background-color: transparent;"
    );
  }
};

handleMouseEnterHamburger = () => {
  hamburger.setAttribute(
    "style",
    "transition: all 0.3s ease-out; background-color: var(--clr-blue-dark);"
  );
};

handleMouseLeaveHamburger = () => {
  hamburger.setAttribute(
    "style",
    "transition: all 0.3s ease-out; background-color: transparent;"
  );
};

// events
hamburger.addEventListener("click", handleMenuDisplay);
hamburger.addEventListener("mouseenter", handleMouseEnterHamburger);
hamburger.addEventListener("mouseleave", handleMouseLeaveHamburger);

menuLinks.forEach((link) => {
  link.addEventListener("click", handleMenuDisplay);
});

closer.addEventListener("click", handleMenuDisplay);
