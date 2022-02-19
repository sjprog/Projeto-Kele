
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


open.addEventListener('click', () => container.classList.add('show-nav')) 

close.addEventListener('click', () => container.classList.remove('show-nav')) 






const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
let text ='Sidney Siqueira'
let idx = 1
let speed = 100/ speedEl.value




writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx >text.length) {
      //idx=1
    }

    setTimeout(writeText, speed)

}
