
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
        li.innerHTML = `
                <h4>R$ ${element.value}</h4>
                <div class="info-button flex align-center justify-between">
                    <p>${valuesCategory[element.categoryID]}</p>
                    <button class="button-remove">
                        <img src="../../assets/trash.png">
                    </button>
                </div>
                `
        li.classList.add("flex", "justify-between", "align-center")
        li.id = element.categoryID
        filtrarAll(li)
        ul.append(li)
        if (valuesCategory[element.categoryID] == "Entrada") {
            elemValuesEntry.push(parseFloat(element.value))
            valorEntry = elemValuesEntry.reduce((prev,curr) => prev + curr)
            filtrarEntries(li)
        }
        else{
            elemValuesExit.push(parseFloat(element.value))
            valorExit = elemValuesExit.reduce((prev,curr) => prev + curr)
            filtrarExits(li)
        }
        valorTotal.innerText = `R$ ${valorEntry - valorExit}`
    });
    removerCard(ul)
}
renderizarLi(insertedValues)

/* -----Filtrar----- */
const ul = document.getElementById("ul")
function filtrarAll(li) {
    let all = document.getElementById("all")
    let entries = document.getElementById("entries")
    let exits = document.getElementById("exits")
    all.addEventListener('click', function (a) {
        a.preventDefault()
        all.classList.add("button-choose")
        entries.classList.remove("button-choose")
        exits.classList.remove("button-choose")

        ul.append(li)
    })
}



function filtrarEntries(li) {
    let all = document.getElementById("all")
    let entries = document.getElementById("entries")
    let exits = document.getElementById("exits")
    entries.addEventListener('click', function (a) {
        a.preventDefault()
        ul.innerHTML = ""
        all.classList.remove("button-choose")
        entries.classList.add("button-choose")
        exits.classList.remove("button-choose")

        ul.append(li)
    })
}



function filtrarExits(li) {
    let all = document.getElementById("all")
    let entries = document.getElementById("entries")
    let exits = document.getElementById("exits")
    exits.addEventListener('click', function (a) {
        a.preventDefault()
        ul.innerHTML = ""
        all.classList.remove("button-choose")
        entries.classList.remove("button-choose")
        exits.classList.add("button-choose")
        
        ul.append(li)
    })
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

/* -----Remover li----- */
function removerLi() {
    let buttons = Array.from(document.getElementsByClassName("button-remove"))
    buttons.forEach(elem => {
        return elem.addEventListener('click', function (a) {
            elem.parentElement.parentElement.remove()
            let ul = document.getElementById("ul")
            removerCard(ul)
        })
    })
}
removerLi()
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


