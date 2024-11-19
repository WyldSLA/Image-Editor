const inputImage = document.getElementById('inputImg')

function carregarImg(){
    const arquivo = inputImage.files[0]
    const leitor = new FileReader
    leitor.onload = function (){
        const imgCarregada = document.getElementById('imagemCarregada')
        imgCarregada.src = leitor.result
    }
    leitor.readAsDataURL(arquivo)
}

inputImage.addEventListener('change', carregarImg)
const btnAbrirImg = document.getElementById('abrir').addEventListener('click',() => inputImage.click())


