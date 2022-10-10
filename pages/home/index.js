
/* -----Renderizar objetos----- */

function renderizarLi(values) {
    let ul = document.getElementById("ul")
    let valorTotal = document.getElementsByClassName("totalValue")[0]
    ul.innerHTML = ""
    let elemValuesEntry = []
    let elemValuesExit = []
    let valorEntry = 0
    let valorExit = 0
    values.forEach(element => {
        let li = document.createElement('li')
        let h4 = document.createElement("h4")
        h4.innerText = `R$ ${element.value}`
        let div = document.createElement("div")
        div.classList.add("info-button", "flex", "align-center", "justify-between")
        let p = document.createElement("p")
        p.innerText = valuesCategory[element.categoryID]
        let button = document.createElement("button")
        button.classList.add("button-remove")
        let img = document.createElement("img")
        img.src = "../../assets/trash.png"
        button.append(img)
        div.append(p, button)
        li.append(h4, div)
        li.classList.add("flex", "justify-between", "align-center")
        li.id = element.categoryID
        button.addEventListener('click', function (a) {
            if (valuesCategory[element.categoryID] == "Entrada") {
                valorEntry -= element.value
                valorTotal.innerText = `R$ ${valorEntry - valorExit}`
            }
            else {
                valorExit -= element.value
                valorTotal.innerText = `R$ ${valorEntry - valorExit}`
            }
            li.remove()
            removerCard(ul)
        })
        ul.append(li)

        if (valuesCategory[element.categoryID] == "Entrada") {
            elemValuesEntry.push(parseFloat(element.value))
            valorEntry = elemValuesEntry.reduce((prev, curr) => prev + curr)
        }
        else {
            elemValuesExit.push(parseFloat(element.value))
            valorExit = elemValuesExit.reduce((prev, curr) => prev + curr)
        }
        valorTotal.innerText = `R$ ${valorEntry - valorExit}`
    });
    removerCard(ul)
}
renderizarLi(insertedValues)

/* -----Filtrar----- */
const ul = document.getElementById("ul")
function filtrarAll(values) {
    let all = document.getElementById("all")
    let entries = document.getElementById("entries")
    let exits = document.getElementById("exits")
    all.addEventListener('click', function (a) {
        a.preventDefault()
        all.classList.add("button-choose")
        entries.classList.remove("button-choose")
        exits.classList.remove("button-choose")

        let filteredAll = values.filter(callbackAll)
        renderizarLi(filteredAll)
    })
}
filtrarAll(insertedValues)
function callbackAll(value) {
    return value.categoryID == 0 || value.categoryID == 1
}


function filtrarEntries(values) {
    let all = document.getElementById("all")
    let entries = document.getElementById("entries")
    let exits = document.getElementById("exits")
    entries.addEventListener('click', function (a) {
        a.preventDefault()
        ul.innerHTML = ""
        all.classList.remove("button-choose")
        entries.classList.add("button-choose")
        exits.classList.remove("button-choose")

        let filteredEntry = values.filter(callbackEntry)
        renderizarLi(filteredEntry)
    })
}
filtrarEntries(insertedValues)
function callbackEntry(value) {
    return value.categoryID == 0
}


function filtrarExits(values) {
    let all = document.getElementById("all")
    let entries = document.getElementById("entries")
    let exits = document.getElementById("exits")
    exits.addEventListener('click', function (a) {
        a.preventDefault()
        ul.innerHTML = ""
        all.classList.remove("button-choose")
        entries.classList.remove("button-choose")
        exits.classList.add("button-choose")

        let filteredExit = values.filter(callbackExit)
        renderizarLi(filteredExit)
    })
}
filtrarExits(insertedValues)
function callbackExit(value) {
    return value.categoryID == 1
}

/* -----Criar li pelo modal----- */

function criarLi(valorInput, isEntry) {
    let ul = document.getElementById("ul")
    let counter = insertedValues.length + 1
    let obj = {
        id: counter,
        value: valorInput,
        categoryID: 0,
    }
    if (isEntry == true) {
        obj.categoryID = 0
    }
    else {
        obj.categoryID = 1
    }
    insertedValues.push(obj)
    ul.innerHTML = ""
    renderizarLi(insertedValues)
}

/* -----Remover card----- */

function removerCard(ul) {
    let main = document.getElementById("app")
    let card = document.getElementsByClassName("empty-value")[0]
    if (ul.children.length > 0) {
        card.classList.add("display-card")
    }
    if (ul.children.length === 0) {
        card.classList.remove("display-card")
        main.append(card)
    }
}


