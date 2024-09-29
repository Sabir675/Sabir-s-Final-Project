let Shopping = document.getElementById("Shopping")
let Computers = document.getElementById("Computers")
let LogOutBtn = document.getElementById("LogOutBtn")
let LogInBtn = document.getElementById("LogInBtn")
let Ad = document.getElementById("Ad")

Shopping.addEventListener("click", function () {
    window.location.href = "../ShoppingPage/index.html"
})

Computers.addEventListener("click", function () {
    window.location.href = "../NewComputer/index.html"
})

LogInBtn.addEventListener("click", function () {
    window.location.href = "../log in/index.html"
})

LogOutBtn.style.display = "none"
Computers.style.display = "none"

let loggedInUserName = JSON.parse(localStorage.getItem("loggedInUserName"))

if (loggedInUserName.length > 0) {
    Shopping.style.display = "block"
    LogInBtn.style.display = "none"
    LogOutBtn.style.display = "block"
    Computers.style.display = "block"
}

LogOutBtn.addEventListener("click", function() {
    remove.it
})


Ad.addEventListener("click", function() {

})