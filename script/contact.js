let inputs = document.querySelectorAll('input');
let result = {
    name: '',
    email: '',
    title: '',
    comment: '',
}
for (let input of inputs) {
    input.addEventListener('focus', deletetext);
}
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let title = document.querySelector('#title');
let comment = document.querySelector('#comment');
name.addEventListener('blur', function saveText() {
    result.name = this.value;
});
email.addEventListener('blur', function saveText() {
    result.email = this.value;
});
title.addEventListener('blur', function saveText() {
    result.title = this.value;
});
comment.addEventListener('blur', function saveText() {
    result.comment = this.value;
    console.log(result);
});
function deletetext() {
    this.value = '';
    this.removeEventListener('focus', deletetext);
}