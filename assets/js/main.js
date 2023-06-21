const menu_bar = document.querySelector(".menu-bar");
const menu_List = document.querySelector(".list");

menu_bar.addEventListener("click", function () {

  menu_List.classList.toggle("toggle_menu_bar");
  
});
