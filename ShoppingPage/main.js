let lists = [
    {
        nameOfComputer: "HP",
    },
    {
        nameOfComputer: "Macbook",
    },
    {
        nameOfComputer: "Acer",
    }
]
   

let computers = JSON.parse(localStorage.getItem("computers")) || [
    {
        ad: "HP",
        sekil: "https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2019/12/HP-Education-Edition-1-scaled.jpg"
    },
    {
        ad: "Macbook",
        sekil: "https://th.bing.com/th/id/R.5371ed482428103757f36f11202383ad?rik=BK5Bt43q3oZrNw&riu=http%3a%2f%2fksassets.timeincuk.net%2fwp%2fuploads%2fsites%2f54%2f2016%2f12%2fmacbook-pro-13-2022-1.jpg&ehk=2EGvNZ1VpKKHBW9QZ%2faoJfy3tTXSDvY8F4hEuSbxx2I%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        ad: "Acer",
        sekil: "https://th.bing.com/th/id/OIP.6jpMhGhzt7330DbhcKolqQHaE3?rs=1&pid=ImgDetMain"
    }
]

lists.forEach(list => {
    let listItem = `
        <li class="list-group-item">${list.nameOfComputer}</li>       
    `

    let listGroup = document.querySelector(".list-group")

    listGroup.innerHTML += listItem
})

let listGroupItems = document.querySelectorAll(".list-group-item")

listGroupItems.forEach(listItem => {
    listItem.addEventListener("click", function () {
        // Tüm aktif sınıfları temizle
        listGroupItems.forEach(li => li.classList.remove("active"))

        // Seçilen öğeye aktif sınıfı ekle
        listItem.classList.add("active")

        // Kartları eklemeden önce temizle
        document.querySelector(".col-9").innerHTML = ""

        computers.forEach(comp => {
            // Doğru anahtarı kullanarak karşılaştırma yap
            if (listItem.textContent.trim() === comp.ad) {
                let card = `
                    <div class="card mx-2 my-2" style="width: 18rem;">
                        <img src="${comp.sekil}" class="card-img-top" alt="${comp.ad}">
                        <div class="card-body">
                            <h5 class="card-title">${comp.ad}</h5>
                        </div>
                    </div>
                `
                document.querySelector(".col-9").innerHTML += card
            }
        })
    })
})

// Sayfa yüklendiğinde tüm bilgisayarları listele
computers.forEach(computer => {
    let card = `
        <div class="card mx-2 my-2" style="width: 18rem;">
            <img src="${computer.sekil}" class="card-img-top" alt="${computer.ad}">
            <div class="card-body">
                <h5 class="card-title">${computer.ad}</h5>
            </div>
        </div>
    `
    document.querySelector(".col-9").innerHTML += card
})
