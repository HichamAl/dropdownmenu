const items = document.querySelectorAll(".items");
const menu = document.querySelector(".toggle");

menu.addEventListener("mouseover", function (e) {
    items.forEach((item)=> {
        item.removeAttribute("hidden");
    })
})

