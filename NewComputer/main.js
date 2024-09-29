let computers = JSON.parse(localStorage.getItem("computers")) || []

let addComputer = document.getElementById("addComputer")

addComputer.addEventListener("click", function () {
    let kategoriya = document.getElementById('kategoriya');
    let ad = document.getElementById('ad');
    let qiymet = document.getElementById('qiymet');
    let tesvir = document.getElementById('tesvir');
    let yeni = document.getElementById('yeni');
    let sekil = document.getElementById('sekil');
    let emeliYaddas = document.getElementById('emeliYaddas');
    let merkeziProsessor = document.getElementById('merkeziProsessor');
    let daimiYaddas = document.getElementById('daimiYaddas');
    let daimiYaddasTipi = document.getElementById('daimiYaddasTipi');
    let emeliyyatSistemi = document.getElementById('emeliyyatSistemi');
    let videoKart = document.getElementById('videoKart')

    let newComputer = {
        kategoriya: kategoriya.value,
        ad: ad.value,
        qiymet: qiymet.value,
        tesvir: tesvir.value,
        yeni: yeni.value,
        sekil: sekil.value,
        emeliYaddas: emeliYaddas.value,
        merkeziProsessor: merkeziProsessor.value,
        daimiYaddas: daimiYaddas.value,
        daimiYaddasTipi: daimiYaddasTipi.value,
        emeliyyatSistemi: emeliyyatSistemi.value,
        videoKart: videoKart.value,
    }

    computers.push(newComputer)

    localStorage.setItem("computers", JSON.stringify(computers))
})

computers.forEach((computer, index) => {
    let newRow = `
            <tr>
                <th scope="row">${index + 1}</th>
                <td class="ad">${computer.ad}</td>
                <td class="qiymet">${computer.qiymet}</td>
                <td class="d-none kategoriya">${computer.kategoriya}</td>
                <td class="d-none ad">${computer.ad}</td>
                <td class="d-none qiymet">${computer.qiymet}</td>
                <td class="d-none tesvir">${computer.tesvir}</td>
                <td class="d-none yeni">${computer.yeni}</td>
                <td class="d-none sekil">${computer.sekil}</td>
                <td class="d-none emeliYaddas">${computer.emeliYaddas}</td>
                <td class="d-none merkeziProsessor">${computer.merkeziProsessor}</td>
                <td class="d-none daimiYaddas">${computer.daimiYaddas}</td>
                <td class="d-none daimiYaddasTipi">${computer.daimiYaddasTipi}</td>
                <td class="d-none emeliyyatSistemi">${computer.emeliyyatSistemi}</td>
                <td class="d-none videoKart">${computer.videoKart}</td>
                <td class="w-25">
                    <button class="w-25 btn modalButtons" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                        <img id="newFoto" class="w-100" src="${computer.sekil}" alt="">
                    </button>
                </td>
                <td>
                    <button type="button" class="btn btn-danger editButtons" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" data-index="${index}">Edit</button>
                    <button class="btn btn-primary deleteBtns">Delete</button>
                </td>
            </tr>
    `

    document.querySelector(".tableBody").innerHTML += newRow
});

let sekil = document.getElementById("sekil")

sekil.addEventListener("change", function () {
    document.getElementById("modalFootherImage").src = sekil.value
})

let modalButtons = document.querySelectorAll(".modalButtons")

modalButtons.forEach(modalButton => {
    modalButton.addEventListener("click", function () {
        let modalBody = document.querySelector(".modalBody img") // img'i hedefliyoruz
        modalBody.src = modalButton.querySelector("img").src
    })
});

let deleteBtns = document.querySelectorAll(".deleteBtns")

deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentElement.parentElement.remove()
        let computers = JSON.parse(localStorage.getItem("computers")) || []

        if (index >= 0 && index < computers.length) {
            computers.splice(index, 1)
        }

        localStorage.setItem("computers", JSON.stringify(computers))
    })
})

let editingIndex = null;

let editButtons = document.querySelectorAll(".editButtons")

editButtons.forEach(editButton => {
    let parent = editButton.parentElement.parentElement

    editButton.addEventListener("click", function () {
        editingIndex = parseInt(editButton.getAttribute("data-index"))
        let kategoriyaEdit = document.getElementById('kategoriyaEdit');
        let adEdit = document.getElementById('adEdit');
        let qiymetEdit = document.getElementById('qiymetEdit');
        let tesvirEdit = document.getElementById('tesvirEdit');
        let yeniEdit = document.getElementById('yeniEdit');
        let sekilEdit = document.getElementById('sekilEdit');
        let emeliYaddasEdit = document.getElementById('emeliYaddasEdit');
        let merkeziProsessorEdit = document.getElementById('merkeziProsessorEdit');
        let daimiYaddasEdit = document.getElementById('daimiYaddasEdit');
        let daimiYaddasTipiEdit = document.getElementById('daimiYaddasTipiEdit');
        let emeliyyatSistemiEdit = document.getElementById('emeliyyatSistemiEdit');
        let videoKartEdit = document.getElementById('videoKartEdit')

        kategoriyaEdit.value = parent.querySelector(".kategoriya").textContent
        adEdit.value = parent.querySelector(".ad").textContent
        qiymetEdit.value = parent.querySelector(".qiymet").textContent
        tesvirEdit.value = parent.querySelector(".tesvir").textContent
        yeniEdit.value = parent.querySelector(".yeni").textContent
        sekilEdit.value = parent.querySelector(".sekil").textContent // Text content yerine sekil.src olmalı
        emeliYaddasEdit.value = parent.querySelector(".emeliYaddas").textContent
        merkeziProsessorEdit.value = parent.querySelector(".merkeziProsessor").textContent
        daimiYaddasEdit.value = parent.querySelector(".daimiYaddas").textContent
        daimiYaddasTipiEdit.value = parent.querySelector(".daimiYaddasTipi").textContent
        emeliyyatSistemiEdit.value = parent.querySelector(".emeliyyatSistemi").textContent
        videoKartEdit.value = parent.querySelector(".videoKart").textContent
    })
})

let SaveEditChanges = document.querySelector("#SaveEditChanges")

SaveEditChanges.addEventListener("click", function () {
    let kategoriyaEdit = document.getElementById('kategoriyaEdit');
    let adEdit = document.getElementById('adEdit');
    let qiymetEdit = document.getElementById('qiymetEdit');
    let tesvirEdit = document.getElementById('tesvirEdit');
    let yeniEdit = document.getElementById('yeniEdit');
    let sekilEdit = document.getElementById('sekilEdit');
    let emeliYaddasEdit = document.getElementById('emeliYaddasEdit');
    let merkeziProsessorEdit = document.getElementById('merkeziProsessorEdit');
    let daimiYaddasEdit = document.getElementById('daimiYaddasEdit');
    let daimiYaddasTipiEdit = document.getElementById('daimiYaddasTipiEdit');
    let emeliyyatSistemiEdit = document.getElementById('emeliyyatSistemiEdit');
    let videoKartEdit = document.getElementById('videoKartEdit')

    let updatetComputer = {
        kategoriya: kategoriyaEdit.value,
        ad: adEdit.value,
        qiymet: qiymetEdit.value,
        tesvir: tesvirEdit.value,
        yeni: yeniEdit.value,
        sekil: sekilEdit.value,
        emeliYaddas: emeliYaddasEdit.value,
        merkeziProsessor: merkeziProsessorEdit.value,
        daimiYaddas: daimiYaddasEdit.value,
        daimiYaddasTipi: daimiYaddasTipiEdit.value,
        emeliyyatSistemi: emeliyyatSistemiEdit.value,
        videoKart: videoKartEdit.value,
    }

    let computers = JSON.parse(localStorage.getItem("computers")) || []

    if (editingIndex !== null && editingIndex >= 0 && editingIndex < computers.length) {
        computers[editingIndex] = updatetComputer
    }

    localStorage.setItem("computers", JSON.stringify(computers))

    window.location.href = "./index.html"
})

$("#kategoriya").change(function () {
    if ($("#kategoriya").val().length === 0) {
        $("#kategoriya").removeClass("is-valid")
        $("#kategoriya").addClass("is-invalid")
    } else {
        $("#kategoriya").removeClass("is-invalid")
        $("#kategoriya").addClass("is-valid")
    }
})

$("#ad").change(function () {
    if ($("#ad").val().length === 0) {
        $("#ad").removeClass("is-valid")
        $("#ad").addClass("is-invalid")
    } else {
        $("#ad").removeClass("is-invalid")
        $("#ad").addClass("is-valid")
    }
})

$("#qiymet").change(function () {
    if ($("#qiymet").val().length === 0) {
        $("#qiymet").removeClass("is-valid")
        $("#qiymet").addClass("is-invalid")
    } else {
        $("#qiymet").removeClass("is-invalid")
        $("#qiymet").addClass("is-valid")
    }
})

$("#tesvir").change(function () {
    if ($("#tesvir").val().length === 0) {
        $("#tesvir").removeClass("is-valid")
        $("#tesvir").addClass("is-invalid")
    } else {
        $("#tesvir").removeClass("is-invalid")
        $("#tesvir").addClass("is-valid")
    }
})

$("#yeni").change(function () {
    if ($("#yeni").val().length === 0) {
        $("#yeni").removeClass("is-valid")
        $("#yeni").addClass("is-invalid")
    } else {
        $("#yeni").removeClass("is-invalid")
        $("#yeni").addClass("is-valid")
    }
})

$("#sekil").change(function () {
    if ($("#sekil").val().length === 0) {
        $("#sekil").removeClass("is-valid")
        $("#sekil").addClass("is-invalid")
    } else {
        $("#sekil").removeClass("is-invalid")
        $("#sekil").addClass("is-valid")
    }
})

$("#emeliYaddas").change(function () {
    if ($("#emeliYaddas").val().length === 0) {
        $("#emeliYaddas").removeClass("is-valid")
        $("#emeliYaddas").addClass("is-invalid")
    } else {
        $("#emeliYaddas").removeClass("is-invalid")
        $("#emeliYaddas").addClass("is-valid")
    }
})

$("#merkeziProsessor").change(function () {
    if ($("#merkeziProsessor").val().length === 0) {
        $("#merkeziProsessor").removeClass("is-valid")
        $("#merkeziProsessor").addClass("is-invalid")
    } else {
        $("#merkeziProsessor").removeClass("is-invalid")
        $("#merkeziProsessor").addClass("is-valid")
    }
})

$("#daimiYaddas").change(function () {
    if ($("#daimiYaddas").val().length === 0) {
        $("#daimiYaddas").removeClass("is-valid")
        $("#daimiYaddas").addClass("is-invalid")
    } else {
        $("#daimiYaddas").removeClass("is-invalid")
        $("#daimiYaddas").addClass("is-valid")
    }
})

$("#daimiYaddasTipi").change(function () {
    if ($("#daimiYaddasTipi").val().length === 0) {
        $("#daimiYaddasTipi").removeClass("is-valid")
        $("#daimiYaddasTipi").addClass("is-invalid")
    } else {
        $("#daimiYaddasTipi").removeClass("is-invalid")
        $("#daimiYaddasTipi").addClass("is-valid")
    }
})

$("#emeliyyatSistemi").change(function () {
    if ($("#emeliyyatSistemi").val().length === 0) {
        $("#emeliyyatSistemi").removeClass("is-valid")
        $("#emeliyyatSistemi").addClass("is-invalid")
    } else {
        $("#emeliyyatSistemi").removeClass("is-invalid")
        $("#emeliyyatSistemi").addClass("is-valid")
    }
})

$("#videoKart").change(function () {
    if ($("#videoKart").val().length === 0) {
        $("#videoKart").removeClass("is-valid")
        $("#videoKart").addClass("is-invalid")
    } else {
        $("#videoKart").removeClass("is-invalid")
        $("#videoKart").addClass("is-valid")
    }
})