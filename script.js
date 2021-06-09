let items = ["basket","tennis","pallavolo","golf","pingpong","calcio","ginnastica artistica"];
let lista = document.createElement("ul");
let lista_due = document.getElementById("lista_due");
let inputBox = document.getElementById("input");
document.getElementById('container').appendChild(lista);

window.onload = function () {
    lista.setAttribute("id", "lista_prima");
    items.forEach(item => {
        let element = document.createElement("li");
        lista.appendChild(element);
        element.innerHTML += item;
    });
}

inputBox.onkeyup = (e) => {
    let userInput = e.target.value; //input inserito dall'utente
    let emptyArray = [];
    if (userInput) {
        document.getElementById("lista_prima").style.display="none";
        document.getElementById("lista_due").style.display = "block";
        emptyArray = items.filter((item) => {
            return item
                .toLocaleLowerCase()
                .startsWith(userInput.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((item) => {
            return (item = "<li>" + item + "</li>");
        });
    } else {
        document.getElementById("lista_prima").style.display = "block";
        document.getElementById("lista_due").style.display = "none";
    }
    showSuggestions(emptyArray);
}

function showSuggestions(list) {
    let listData;
    if(!list.length) {
        let inputValue = inputBox.value;
        listData = '<li>'+inputValue+'</li>';
    } else {
        listData = list.join('');
    }

    lista_due.innerHTML = listData;
}

