let closeNav = document.querySelector(".close-nav"),
    navMobile = document.querySelector(".nav-mobile"),
    openNav = document.querySelector(".nav-open")
closeNav.addEventListener("click", _=> {
    navMobile.style.transform = "translateX(100%)"
})
openNav.addEventListener("click", _=> {
    navMobile.style.transform = "translateX(0%)"
})