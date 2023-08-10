const menuLinks = document.querySelectorAll(".menu-item");

const currentMenuTextBold = () => {
  const currentPageTopic = document
    .querySelector("h2")
    .textContent.replace(/(\s*)/g, "");
  [...menuLinks].forEach((menu) => {
    if (menu.innerText === currentPageTopic) {
      menu.classList.add("current-menu");
    }
  });
};

window.onload = function () {
  currentMenuTextBold();
};
