let create = document.querySelector('#create');
let table = document.querySelector('table');
let i = 2;
let FirstGamer = document.querySelector('#FirstGamer');
let SecondGamer = document.querySelector('#SecondGamer');
let gamers = document.querySelectorAll('.Gamers');
let p = document.querySelectorAll('p');
let button = document.querySelector('button');
for (let i = 0; i < gamers.length; i++) {
    gamers[i].addEventListener('click', deleteInputValue);
    gamers[i].dataset.nom = i;
    gamers[i].addEventListener('keypress', function SaveName(event, p) {
        if (event.key == 'Enter') {
            let p = document.querySelectorAll('p');
            let parent = this.parentElement;
            let child = this;
            let nom = this.dataset.nom;
            p[nom].innerHTML = this.value;
            p[nom].dataset.cond = 'name';
            parent.removeChild(this);
        }
    })
}
create.addEventListener('click', deleteInputValue);
create.addEventListener('keypress', createTable);
button.addEventListener('click', reloaded);
function reloaded() {
    location.href = location.href;
}
function deleteInputValue() {
    this.value = '';
}
function createTable(event) {
    if (event.key == 'Enter') {
        for (let elem of p) {
            if (elem.dataset.cond == 'zero') {
                alert('Введите имена игроков!');
                return null;
            }
        }
        for (let rows = 0; rows < Number(this.value); rows++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);
            for (let cols = 0; cols < Number(this.value); cols++) {
                let td = document.createElement('td');
                td.addEventListener('click', game);
                tr.appendChild(td);
            }
        }
        this.removeEventListener('keypress', createTable);
    }
}
function game() {
    if (i % 2 == 0) {
        this.innerHTML = 'X';
        this.dataset.game = 'X';
        i++;
    }
    else {
        this.innerHTML = '0';
        this.dataset.game = '0';
        i++;
    }
    this.removeEventListener('click', game);
    checkwinnerOnLine();
    checkOnColumn();
    checkOnFirstDiag();
    checkOnSecondDiag();
}
function checkwinnerOnLine() {
    let trs = document.querySelectorAll('tr');
    for (let tr of trs) {
        let resultOnLine = [];
        let tds = tr.querySelectorAll('td');
        for (let td of tds) {
            resultOnLine.push(td);
        }
        if (resultOnLine.every(checkOnX)) {
            alert('Победил' + ' ' + p[0].innerHTML);
            if (confirm('Начать игру заново?')) {
                location.href = location.href;
            }
        }
        if (resultOnLine.every(checkOn0)) {
            alert('Победил' + ' ' + p[1].innerHTML);
            if (confirm('Начать игру заново?')) {
                location.href = location.href;
            }
        }
    }
}
function checkOnX(element, index, array) {
    if (element.dataset.game == 'X') {
        return element;
    }
}
function checkOn0(element, index, array) {
    if (element.dataset.game == '0') {
        return element;
    }
}
function checkOnColumn() {
    let tds = document.querySelectorAll('td');
    let trs = document.querySelectorAll('tr');
    for (let j = 0; j < trs.length; j++) {
        let result = [];
        for (let i = j; i < tds.length; i = i + trs.length) {
            result.push(tds[i]);
        }
        if (result.every(checkOnX)) {
            alert('Победил' + ' ' + p[0].innerHTML);
            if (confirm('Начать игру заново?')) {
                location.href = location.href;
            }
        }
        if (result.every(checkOn0)) {
            alert('Победил' + ' ' + p[1].innerHTML);
            if (confirm('Начать игру заново?')) {
                location.href = location.href;
            }
        }
    }
}
function checkOnFirstDiag() {
    let tds = document.querySelectorAll('td');
    let trs = document.querySelectorAll('tr');
    let result = [];
    for (let i = 0; i < tds.length; i = i + trs.length + 1) {
        result.push(tds[i]);
    }
    if (result.every(checkOnX) && result.length == trs.length) {
        alert('Победил ' + p[0].innerHTML);
        if (confirm('Начать игру заново?')) {
            location.href = location.href;
        }
    }
    if (result.every(checkOn0) && result.length == trs.length) {
        alert('Победил ' + p[1].innerHTML);
        if (confirm('Начать игру заново?')) {
            location.href = location.href;
        }
    }
}
function checkOnSecondDiag() {
    let tds = document.querySelectorAll('td');
    let trs = document.querySelectorAll('tr');
    let result = [];
    for (let i = trs.length - 1; i < tds.length - 1; i = i + trs.length - 1) {
        result.push(tds[i]);
    }
    console.log(result);
    if (result.every(checkOnX) && result.length == trs.length) {
        alert('Победил ' + p[0].innerHTML);
        if (confirm('Начать игру заново?')) {
            location.href = location.href;
        }
    }
    if (result.every(checkOn0) && result.length == trs.length) {
        alert('Победил ' + p[1].innerHTML);
        if (confirm('Начать игру заново?')) {
            location.href = location.href;
        }
    }
}