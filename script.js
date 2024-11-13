function converterCanvas(){
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = document.getElementById('imagemCarregada')
    const {width, height} = img
    canvas.width = width
    canvas.height = height
    ctx.drawImage(img, 0, 0, width, height)
}


function abrirArquivo(){
    const inputImg = document.getElementById('inputImage')
    inputImg.click()
    inputImg.addEventListener('change', function(){
        const arquivo = inputImg.files[0]
        const leitor = new FileReader()
        leitor.onload = function() {
            const viewImg = document.getElementById('imagemCarregada')
            viewImg.src = leitor.result
            converterCanvas()
        }
        leitor.readAsDataURL(arquivo)
    })

}

function salvarImagem(){
    const link = document.createElement("a")
    const img = document.getElementById('imagemCarregada')
    link.download = "TESTE.JPG"
    link.href = img.toDataURL()
    link.click()
}

const btnOpen = document.getElementById('open').addEventListener('click', abrirArquivo)
const btnSave = document.getElementById('save').addEventListener('click', salvarImagem)