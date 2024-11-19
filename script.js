const inputImage = document.getElementById('inputImg')
const inputMedidor = document.getElementById('medidor')
const msgMedidor = document.getElementById('msgmedidor')
const msgFiltro = document.getElementById('msgfiltro')
const imgCarregada = document.getElementById('imagemCarregada')
const btnsFiltros = document.querySelectorAll('.filtros button')
let brilho = 100, saturacao = 100, inversao = 0, escalacinza = 0

function carregarImg(){
    const arquivo = inputImage.files[0]
    const leitor = new FileReader
    leitor.onload = function (){
        imgCarregada.src = leitor.result
    }
    leitor.readAsDataURL(arquivo)
}

function updateFiltros(){
    msgMedidor.textContent = `${inputMedidor.value}%`
}

function aplicarFiltros(){
    imgCarregada.style.filter = `brigthness(${brilho}) saturate(${saturacao}) invert(${inversao}) grayscale(${escalacinza})`
}

inputMedidor.addEventListener('input', updateFiltros)
inputImage.addEventListener('change', carregarImg)
const btnAbrirImg = document.getElementById('abrir').addEventListener('click',() => inputImage.click())

