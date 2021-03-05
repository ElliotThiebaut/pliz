menuOpen.addEventListener("click", () => {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    navBlock.style.display = "flex";
    contentBlock.style.display = "none"
})

menuClose.addEventListener("click", () => {
    menuClose.style.display = "none"
    menuOpen.style.display = "block";
    navBlock.style.display = "none";
    contentBlock.style.display = "block"
})