
const openModalButtons = Array.from(document.querySelectorAll("[data-open-modal]"))
openModalButtons.map((elem) => {
    return elem.addEventListener('click', function () {
        let valueModal = elem.getAttribute("data-open-modal")
        document.getElementById(valueModal).classList.toggle("show-modal")
    })
})

const btn = document.querySelector("#send")
function capturarValue(botao) {
    return botao.addEventListener('click', function (e) {
        e.preventDefault()
        const name = document.querySelector("#valor")
        const value = name.value
        if (value !== "") {
            criarLi(value)
        }
    })
}
capturarValue(btn)