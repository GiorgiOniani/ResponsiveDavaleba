var toggler = document.querySelector(".sa")
var rm = document.querySelector(".res")

toggler.addEventListener("click", () => {
    if (rm.classList.contains("active-barrr")) {
        rm.classList.remove("active-barrr")
        rm.classList.add("de-active-bar")
    }
    else {
        rm.classList.remove("de-active-bar")
        rm.classList.add("active-barrr")
    }
})