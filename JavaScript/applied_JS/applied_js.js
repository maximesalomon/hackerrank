mainHeaderRed = document.querySelector('.main-header').style.color = 'red';

const sayHelloWorld = () => {
    alert("Hello world 👋")
}

const sayHelloAll = () => {
    alert("Hello all 👋")
}

helloWorld = document.getElementById('hello-world').addEventListener('click', sayHelloWorld)
helloAll = document.getElementById('hello-all').addEventListener('click', sayHelloAll)