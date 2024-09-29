let users = JSON.parse(localStorage.getItem("users")) || []

let singInBtn = $("#singInBtn")

singInBtn.click(function () {
    let email = $("#email").val()
    let password= $("#password").val()
    let FirstName= $("#FirstName").val()
    let LastName= $("#LastName").val()


        let newUser = {
            email :email,
            password: password,
            FirstName: FirstName,
            LastName: LastName
        }

        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))
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
    if ($("#password").val().lenght === 0) {
        $("#password").removeClass("is-valid")
        $("#password").addClass("is-invalid")
    } else {
        $("#password").removeClass("is-invalid")
        $("#password").addClass("is-valid")
    }
})

$("#FirstName").change(function () {
    if ($("#FirstName").val().length === 0) {
        $("#FirstName").removeClass("is-valid")
        $("#FirstName").addClass("is-invalid")
    } else {
        $("#FirstName").removeClass("is-invalid")
        $("#FirstName").addClass("is-valid")
    }
})

$("#LastName").change(function () {
    if ($("#LastName").val().length === 0) {
        $("#LastName").removeClass("is-valid")
        $("#LastName").addClass("is-invalid")
    } else {
        $("#LastName").removeClass("is-invalid")
        $("#LastName").addClass("is-valid")
    }
})