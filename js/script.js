
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


open.addEventListener('click', () => container.classList.add('show-nav')) 

close.addEventListener('click', () => container.classList.remove('show-nav')) 



//velocidade para digitar

let textEl3 = document.getElementById('text3')
let speedEl3 = document.getElementById('speed3')
let text3 ='Sidney Siqueira'
let idx3 = 1
let speed3 = 80/ speedEl3.value




writeText3()

function writeText3() {
    textEl3.innerText = text3.slice(0, idx3)

    idx3++

    if(idx3 >text3.length) {
      //idx=4
    }

    setTimeout(writeText3, speed3)

}







let textEl = document.getElementById('text')
let speedEl = document.getElementById('speed')
let text ='Desenvolvedor Full Stack'
let idx = 1
let speed = 80/ speedEl.value




writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx >text.length) {
      //idx=4
    }

    setTimeout(writeText, speed)

}

// velocidade para digitar




const toggle = document.getElementById('toggle')
const section = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))
