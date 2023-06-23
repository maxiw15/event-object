'use strict';

let arr = Array.from(document.querySelectorAll(".dropdown__value"))
arr.forEach(query => query.addEventListener("click", click))

function click (){
    this.closest(".dropdown").querySelector('.dropdown__list').classList.add("dropdown__list_active")
    let items = Array.from(document.querySelectorAll(".dropdown__item"))
    items.forEach(item => item.addEventListener("click", click_second))
}

function click_second(){
    event.preventDefault()
    let parent =  this.closest(".dropdown")
    parent.querySelector(".dropdown__value").textContent = this.querySelector(".dropdown__link").textContent
    parent.querySelector('.dropdown__list').classList.remove("dropdown__list_active")
}