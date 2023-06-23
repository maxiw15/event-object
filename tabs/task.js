let tabs = Array.from(document.getElementsByClassName("tab"))
let content  = Array.from(document.getElementsByClassName("tab__content"))
tabs.forEach(tab=> tab.addEventListener("click", click))

let previus = 0
let next

function click(){
    content[previus].classList.remove("tab__content_active")
    tabs[previus].classList.remove("tab_active")
    next = tabs.indexOf(this)
    content[next].classList.add("tab__content_active")
    this.classList.add("tab_active")
    previus = next
}