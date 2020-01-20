const increment = () => {
    const btn = document.getElementById("btn")
    const count = parseInt(btn.innerText)
    btn.innerText = count + 1
}