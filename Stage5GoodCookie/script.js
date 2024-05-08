let menssagens = [
"Se alguem está tão cansado que nao possa te dar uma sorriso, deixa-lhe o teu.",
"A vida trará coisas boas se tiver paciência.",
"Não compense na ira o que lhe falta na razão.",
"Defeitos e virtudes são apenas dois lados da mesma moeda.",
"A maior de todas as torres começa no solo.",
"A juventude não é uma época da vida, é um estado de espírito.",
"Siga os bons e aprenda com eles.",
"Não importa o tamanho da montanha, ela não pode tapar o sol.",
"Uma bela flor é incompleta sem as suas folhas.",
"O riso é a menor distância entre duas pessoas.",
]

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
const btnNewCookie = document.querySelector("#openNewCookie")
const imgOpenCookie = document.querySelector("#imgOpenCookie")

function ramdonMenssage (){
    randomNumber = Math.round(Math.random() * 10)
    let exibition = menssagens[randomNumber]
    document.querySelector(".card p").innerText =`${exibition}`
    
}

function toggleScreen () {
    screen2.classList.toggle("hidden")
    screen1.classList.toggle("hidden")
    ramdonMenssage()
}

// eventos
btnNewCookie.addEventListener('click', toggleScreen)
imgOpenCookie.addEventListener('click', toggleScreen)