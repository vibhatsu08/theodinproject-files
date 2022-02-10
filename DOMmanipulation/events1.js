//method 2
const button = document.querySelector('#btn');
button.onclick = () => { //always use the variable when calling functions
    alert("hello world!");
}

//method 3
const button3 = document.querySelector('#btn3');
button3.addEventListener(
    'click', () => {
        alert("hello world!");
    }
)