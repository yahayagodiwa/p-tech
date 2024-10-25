const navItems = document.querySelector(".navitems");
const toggleBtn = document.querySelector(".toggle");
const navBar = document.querySelector(".navbar");


toggleBtn.addEventListener("click", () => {
    navItems.classList.toggle('hidden');
//    navBar.style.display = 'block'
});
