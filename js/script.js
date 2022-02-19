
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


open.addEventListener('click', () => container.classList.add('show-nav')) 

close.addEventListener('click', () => container.classList.remove('show-nav')) 



//velocidade para digitar


let textEl = document.getElementById('text')
let speedEl = document.getElementById('speed')
let text ='Desenvolvedor Full Stack'
let idx = 1
let speed = 100/ speedEl.value




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

let textEl2 = document.getElementById('text2')
let speedEl2 = document.getElementById('speed2')
let text2 ='▪ Analista de desenvolvimento de sistemas e Desenvolvedor full stack, focado em javascript e apto para trabalho em equipe.formado em gestão de negócios imobiliários. transitei de carreira para a área de tecnologia visando melhor aplicação dos meus conhecimentos e oportunidades de crescimento como profissional, grande experiência com gestão de pessoas e projetos com diversas complexidades.'
let idx2 = 1
let speed2 = 20/ speedEl2.value




writeText2()

function writeText2() {
    textEl2.innerText = text2.slice(0, idx2)

    idx2++

    if(idx2 >text2.length) {
      //idx2=4
    }

    setTimeout(writeText2, speed2)

}