selectableLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainTitles.forEach((title) => {
      title.classList.remove("selected");
    });
    mainTitles.forEach((title) => {
      if (
        title.parentElement.getAttribute("id") ===
        link.getAttribute("href").substring(1)
      ) {
        title.classList.toggle("selected");
      }
    });
  });
});
