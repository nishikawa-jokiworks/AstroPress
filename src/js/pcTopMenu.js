//すべてのサブメニューを取得（上下にあったりする）
const subMenus = document.querySelectorAll(".sub-menu");
//取得したサブメニューの親要素a にイベントリスナーを設定
subMenus.forEach(function (subMenu) {
  const parentSubMenu = subMenu.parentNode;
  const aSubMenu = parentSubMenu.firstElementChild;
  aSubMenu.addEventListener("click", function (e) {
    e.preventDefault();
  });
  parentSubMenu.addEventListener("click", function (e) {
    subMenu.classList.toggle("openSubmenu");
    if (subMenu.classList.contains("openSubmenu")) {
      console.log("humberger opened");
      subMenu.classList.add();
      subMenu.classList.remove("lg:hidden");
    } else {
      subMenu.classList.remove();
      subMenu.classList.add("lg:hidden");
    }
  });
});
