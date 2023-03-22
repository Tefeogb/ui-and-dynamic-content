let inputItem = document.getElementById ('input');
let ItemBtn = document.getElementById('btn');
let storeList = document.getElementById('list');
let feedback = document.getElementById('feedback');

function addItem () {
    let listItem = document.createElement('li');

    if (inputItem.value.trim()!== ''){

    listItem.textContent = inputItem.value;

    storeList.appendChild(listItem);

    feedback.textContent = '';

    inputItem.value = '';

    inputItem.focus();
    }

    else {
        feedback.textContent = 'Nothing entered';
    }
}

ItemBtn.addEventListener('click', addItem);
