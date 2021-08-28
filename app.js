const detect = document.querySelector('#detect'),
      wrapper = document.querySelector('.wrapper'),
      button = document.querySelector('button')

let adWords = ["ad", "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge"]
for(let item of adWords) {
    detect.classList.add(item)
}

/*button.addEventListener('click', ()=> {
    getProperty == "none" ? wrapper.classList.add("show") : wrapper.classList.remove("show")
})*/
let getProperty = window.getComputedStyle(detect).getPropertyValue("display");

if (!wrapper.classList.contains("show")) {
getProperty == "none" ? wrapper.classList.add("show") : wrapper.classList.remove("show")
}