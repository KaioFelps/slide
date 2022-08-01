// import slides from "./slideObjects.js";
import slides from "./slideObjects.js"

// variáveis "globais"
const length = slides.length
let index = 0

export default function slide() {
    generateSlides()
    generateNavs()
    updateNav()

    let timeOut = 5000
    setInterval(updateAll, timeOut)
}

// funções
function generateSlides() {
    slides.forEach( (slide) => {
        const display = document.querySelector(".slide-display")
        let inneredSlide = `
        <a href=${slide.link} target="_blank" class="slide-image">
            <img src="${slide.img}" alt="${slide.name}"/>
            <p class="slide-text">${slide.description}</p>
        </a>
        `
        display.innerHTML += inneredSlide
    })
}

function generateNavs() {
    const nav = document.querySelector(".slide-navigation")
    // criando inputs radios para cada um dos slides existentes
    slides.forEach((slide) => {
        nav.innerHTML += `<input type="radio" name="slide-nav" id=${slide.name} class="slide-nav ${slides.indexOf(slide)}"></input>`
    })   
}   

function updateNav() {
    // gerar o id de respectivo input radio
    let radio = "#" + slides[index].name
    if(radio) {
        document.querySelector(radio).checked=true
    }
    // OBS: -1 pois o index parte do 0 (0, 1, 2, 3) e a quantidade não (1, 2, 3, 4).
    if(index == slides.length - 1) {
        index = 0
    } else {
        index++
    }

    // Trocar o index para o input radio que for clicado pelo usuário
    document.querySelectorAll(".slide-nav").forEach((nav) => {
        nav.addEventListener("click", function (obj) {
                index = nav.classList[1]
                updateDisplay()
            })
    })
}

function updateDisplay() {
    let stSlide = document.querySelector(".slide-image")
    let margin = "-" + (230 * index) + "px"

    stSlide.style.marginTop=margin;
}

function updateAll() {
    updateDisplay()
    updateNav()
}