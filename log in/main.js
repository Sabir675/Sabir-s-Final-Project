let users = JSON.parse(localStorage.getItem("users")) || []

let singInBtn = $("#singInBtn")

userFound = false

singInBtn.click(function () {
    let email = $("#email").val()
    let password = $("#password").val()

    users.forEach(user => {
        if (user.email === email && user.password === password) {
            alert("correct password!!!")
            window.location.href = "../SlayderPage/index.html"
            userFound = true
        }else{
            alert("kjntoif/")
        }    
    });
    localStorage.setItem("loggedInUserName", JSON.stringify("user.username"))

    if (userFound = false) {
        alert("ne pravilno!")
    }
})

$("#email").change(function () {
    if ($("#email").val().length === 0) {
        $("#email").removeClass("is-valid")
        $("#email").addClass("is-invalid")
    } else {
        $("#email").removeClass("is-invalid")
        $("#email").addClass("is-valid")
    }
})

$("#password").change(function () {
    if ($("#password").val().length === 0) {
        $("#password").removeClass("is-valid")
        $("#password").addClass("is-invalid")
    } else {
        $("#password").removeClass("is-invalid")
        $("#password").addClass("is-valid")
    }
})