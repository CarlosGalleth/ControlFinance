
const openModalButtons = Array.from(document.querySelectorAll("[data-open-modal]"))
openModalButtons.map((elem) => {
    return elem.addEventListener('click', function () {
        let valueModal = elem.getAttribute("data-open-modal")
        document.getElementById(valueModal).classList.toggle("show-modal")
    })
})

const btn = document.querySelector("#send")
function capturarValue(botao) {
    let entry = document.getElementById("entry")
    let exit = document.getElementById("exit")
    let isEntry = true
    entry.addEventListener('click', function(){
        entry.classList.add("button-choose")
        exit.classList.remove("button-choose")
        isEntry = true
    })
    exit.addEventListener('click', function(){
        exit.classList.add("button-choose")
        entry.classList.remove("button-choose")
        isEntry = false
    })
    
    botao.addEventListener('click', function (e) {
        e.preventDefault()
        const name = document.querySelector("#valor")
        const value = name.value
        if (value !== "") {
            criarLi(value, isEntry)
        }
    })
}
capturarValue(btn)