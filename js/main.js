const add = document.getElementById("add")
const divMain = document.getElementById("main")

list = Array()

add.addEventListener("click", function () {
    const newDiv = document.createElement("div")
    newDiv.textContent = "AAAAAAAAA"
    divMain.insertBefore(newDiv, add)
})