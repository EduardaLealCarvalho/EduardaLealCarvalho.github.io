//Criação das divs
const divSubtitle = document.createElement("div");
divSubtitle.classList.add("line");

const label = document.createElement("div");
label.classList.add("line");

const firstLine = document.createElement("div");
firstLine.classList.add("line");

const secondLine = document.createElement("div");
secondLine.classList.add("line");

// Adicionando os elementos

//titles and labels
const title = document.createElement('h1');
title.innerText = 'Disappearing Circles';
title.classList.add("title");

const addTitle = document.createElement('h2');
addTitle.innerText = 'Adicionar';
addTitle.classList.add("addTitle");

const removeTitle = document.createElement('h2');
removeTitle.innerText = 'Remover';
removeTitle.classList.add("removeTitle")

const removeByColorLabel = document.createElement('p');
removeByColorLabel.innerText = 'Selecione a cor dos circulos que deseja apagar:';
removeByColorLabel.classList.add("removeLabel")

const removeByNumberLabel = document.createElement('p');
removeByNumberLabel.innerText = 'Informe quantos circulos deseja remover:';

const addLabel = document.createElement('p');
addLabel.innerText = 'Insira quantos circulos deseja adicionar: ';

//buttons
const addCircles = document.createElement("button");
addCircles.id = "buttonAddCircles";
addCircles.classList.add("button");
addCircles.classList.add("spaceSelect")
addCircles.onclick = () => addCircle();
addCircles.innerHTML = "Adicionar circulo";

const addRandomNumberOfCircles = document.createElement("button");
addRandomNumberOfCircles.id = "buttonAddRandomNumberOfCircles";
addRandomNumberOfCircles.classList.add("button");
addRandomNumberOfCircles.classList.add("spaceLabel");
addRandomNumberOfCircles.type = "button";
addRandomNumberOfCircles.onclick = () => addRandomQuantityCircles();
addRandomNumberOfCircles.innerHTML = "Adicionar quantidade aleatoria de circulos";

const removeCirclesByColor = document.createElement("button");
removeCirclesByColor.id = "buttonRemoveCirclesByColor";
removeCirclesByColor.classList.add("buttonRemove");
removeCirclesByColor.type = "button";
removeCirclesByColor.onclick = () => this.deleteCirclesByColor(selectColor.value);
removeCirclesByColor.innerHTML = "Remover circulo(s) pela cor";

const removeAllCircles = document.createElement("button");
removeAllCircles.id = "buttonRemoveAllCircles";
removeAllCircles.classList.add("buttonRemove");
removeAllCircles.type = "button";
removeAllCircles.onclick = () => this.deleteAllCircles();
removeAllCircles.innerHTML = "Remover todos os circulos";

//inputs
const numberCircles = document.createElement("input");
numberCircles.setAttribute("type", "number");
numberCircles.id = "inputNumberCircles"
numberCircles.classList.add("input");


//Create and append select list
const selectColor = document.createElement("select");
selectColor.id = "mySelect";
selectColor.classList.add("select")
const circleColor = ['red-circle','yellow-circle','blue-circle']

//Create and append the options
for (var i = 0; i < circleColor.length; i++) {
    var option = document.createElement("option");
    option.value = circleColor[i];
    option.text = circleColor[i];
    selectColor.appendChild(option);
}

// adicionando elemento na div
divSubtitle.appendChild(addTitle);
divSubtitle.appendChild(removeTitle);
label.appendChild(addLabel);
label.appendChild(removeByColorLabel);
firstLine.appendChild(numberCircles);
firstLine.appendChild(addCircles);
firstLine.appendChild(selectColor);
firstLine.appendChild(removeCirclesByColor);
firstLine.appendChild(removeAllCircles);
secondLine.appendChild(addRandomNumberOfCircles);
secondLine.appendChild(removeAllCircles);

//Adicionando as divs e os componentes na tela (body)
document.body.appendChild(title);
document.body.appendChild(divSubtitle);
document.body.appendChild(label);
document.body.appendChild(firstLine);
document.body.appendChild(secondLine);

//Funções
//função que adiciona círculo pela quantidade informada no
function addCircle(type) {
    let circlesNumber = parseInt(document.getElementById("inputNumberCircles").value);
    if (circlesNumber == null || isNaN(circlesNumber) || circlesNumber<1) {
        alert("Insira apenas numeros inteiros positivos");
        return;
    }
    for (let i = circlesNumber; i > 0; i--) {
        let circle = document.createElement("div");
        circle.classList.add("circle")
        circle.onclick = (event) => this.hideCircle(event);
        circle.classList.add(circleColor[Math.floor(Math.random() * circleColor.length)]);
        document.body.appendChild(circle);
    }
    document.getElementById("inputNumberCircles").value = '';
}

//função que adiciona quantidades aleatórias de círculos
function addRandomQuantityCircles() {
    let circlesNumber = Math.floor(Math.random() * 10 + 1);
    for (let i = circlesNumber; i > 0; i--) {
        let circle = document.createElement("div");
        circle.classList.add("circle")
        circle.onclick = (event) => this.hideCircle(event);
        circle.classList.add(circleColor[Math.floor(Math.random() * circleColor.length)]);
        document.body.appendChild(circle);
    }
}

//função para deletar círculo ao click
function hideCircle(event) {
    event.target.style.display = "none";
}

// função que deleta todos os circulos
function deleteAllCircles() {
    const circles = document.querySelectorAll('.circle');
    if (circles.length === 0) {
        return;
    }
    circles.forEach(circle => {
        circle.remove();
    });
}

//função que deleta os círculos pela cor
function deleteCirclesByColor(circleClass) {
    const circles = document.querySelectorAll(`.${circleClass}`);
    if (circles.length === 0) {
        return;
    }
    circles.forEach(circle => {
        circle.remove();
    })
}