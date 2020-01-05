mainHeaderRed = document.querySelector('.main-header').style.color = 'red';

const sayHelloWorld = () => {
    alert("Hello world 👋")
}

helloBtn = document.getElementById('hello-btn').addEventListener('click', sayHelloWorld)