
let ul = document.getElementsByClassName("list-prices")[0]
let emptyValue = document.getElementsByClassName("empty-value")[0]
let counter = 0
let somaTotal = 0
let main = document.getElementsByClassName("mid")[0]


function criarLi(valorInput) {
    let valor = (parseFloat(valorInput)).toFixed(2)
    let li = document.createElement("li")
    li.className = "flex justify-between align-center"
    let h4 = document.createElement("h4")
    h4.innerText = `R$ ${valor}`
    let div = document.createElement("div")
    div.className = "info-button flex align-center justify-between"
    let p = document.createElement("p")

    if (isEntry) {
        p.innerText = "Entrada"
        li.id = "entry"
    }
    else{
        p.innerText = "Saida"
        li.id = "exit"
    }

    let button = document.createElement("button")
    button.className = "button-remove"
    let imgRemove = document.createElement("img")
    imgRemove.src = "../../assets/trash.png"
    button.append(imgRemove)
    div.append(p, button)
    li.append(h4, div)
    ul.append(li)
    removerLi(button, li)
    somarValores([valor])
    subtrairValores(button,valor)
    filtrarTudo(li)
    counter++
    if (counter>0) {
        emptyValue.remove()
    }
}

let total = document.getElementsByClassName("totalValue")[0]

function removerLi(button, li) {
    return button.addEventListener('click', function (a) {
        a.preventDefault()
        counter--
        if (counter == 0){
            main.append(emptyValue)
        }
        return li.remove()
    })
}


function somarValores(valor) {
    let value = parseFloat(valor)
    somaTotal += value
    total.innerText = `R$ ${(somaTotal).toFixed(2)}`
}
function subtrairValores(button, value){
    return button.addEventListener('click', function(a){
        a.preventDefault()
        let valor = parseFloat(value)
        somaTotal -= valor
        total.innerText = `R$ ${(somaTotal).toFixed(2)}`
    })
}

let buttonEntrada = document.getElementById("entry")
let buttonSaida = document.getElementById("exit")
let isEntry = true
function entrada(entry) {
    return entry.addEventListener('click', function(a){
        a.preventDefault()
        buttonEntrada.classList.add("button-choose")
        buttonSaida.classList.remove("button-choose")
        isEntry = true
    })
}
entrada(buttonEntrada)

function saida(exit) {
    return exit.addEventListener('click', function(a){
        a.preventDefault()
        buttonSaida.classList.add("button-choose")
        buttonEntrada.classList.remove("button-choose")
        isEntry = false
    })
}
saida(buttonSaida)

let all = document.getElementById("all")
let entries = document.getElementById("entries")
let exits = document.getElementById("exits")
function filtrarAll(butAll) {
    return butAll.addEventListener('click', function(a){
        a.preventDefault()
        ul.innerHTML = ""
        all.classList.add("button-choose")
        entries.classList.remove("button-choose")
        exits.classList.remove("button-choose")
        ul.append(...arrayEntries, ...arrayExits)
    })
}
filtrarAll(all)

function filtrarEntries(butEntry) {
    return butEntry.addEventListener('click', function(a){
        a.preventDefault()
        ul.innerHTML = ""
        all.classList.remove("button-choose")
        entries.classList.add("button-choose")
        exits.classList.remove("button-choose")
        ul.append(...arrayEntries)
    })
}
filtrarEntries(entries)

function filtrarExits(butExit) {
    return butExit.addEventListener('click', function(a){
        a.preventDefault()
        ul.innerHTML = ""
        all.classList.remove("button-choose")
        entries.classList.remove("button-choose")
        exits.classList.add("button-choose")
        ul.append(...arrayExits)
    })
}
filtrarExits(exits)

let arrayEntries = []
let arrayExits = []
function filtrarTudo(li){
    if (li.id == "entry") {
        arrayEntries.push(li)
    }
    if (li.id == "exit"){
        arrayExits.push(li)
    }
}
