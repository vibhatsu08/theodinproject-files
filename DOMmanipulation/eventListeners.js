const button = document.querySelector('#btn');
button.addEventListener (
    'click', () => {
        alert("hello world!");
    }
);

function alertFunction () {
    alert("hello world!");
}

const buttons = document.querySelectorAll('button');
buttons.forEach ((button) =>
    {
        button.addEventListener(
            'click', () => {
                alert("hello world!");
            }
        );
    }
);



