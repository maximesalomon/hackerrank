mainHeaderRed = document.querySelector('.main-header').style.color = 'red';

const sayHello = () => {
    alert("Hello 👋")
}

helloBtn = document.getElementById('hello-btn').addEventListener('click', sayHello)