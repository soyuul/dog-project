const mainBtn = document.querySelector(".main-icon");
const menuContainer = document.querySelector(".menu-container");

mainBtn.addEventListener("click", function(){
    menuContainer.classList.toggle("active");
})