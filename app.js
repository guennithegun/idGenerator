import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

let createButton = document.getElementById('create');
let clearButton = document.getElementById('clear');
let resultList = document.getElementById('resultList');
let radioNano = document.getElementById('nanoid');
let radioUuid = document.getElementById('uuid');
let numberOfIds = document.getElementById('number');
let arrayOfIds = [];

// create uuid
const createUUID = (number) => {
    for (var i = 0; i < number; i++) {
        arrayOfIds.push(uuidv4());
    }
}

// create nanoid
const createNanoID = (number) => {
    for (var i = 0; i < number; i++) {
        arrayOfIds.push(nanoid());
    }
}

// create the list of ids
createButton.addEventListener('click', () => {
    if (numberOfIds.value <= 0 || numberOfIds.value === undefined) {
        return alert('Please create at least 1 ID');
    }
    if (numberOfIds.value > 10000) {
        return alert('Sorry :-( limited to max. 10.000');
    }
    if (radioNano.checked) {
        createNanoID(numberOfIds.value);
    }
    if (radioUuid.checked) {
        createUUID(numberOfIds.value);
    }

    arrayOfIds.forEach(el => {
        let listElement = document.createElement("LI");
        let textListElement = document.createTextNode(el);
        listElement.appendChild(textListElement);
        resultList.appendChild(listElement);
    })

    arrayOfIds = [];
    clearButton.disabled = false;
})

//clear list
clearButton.addEventListener('click', () => {
    resultList.innerHTML = '';
    clearButton.disabled = true;
    numberOfIds.value = '';
});