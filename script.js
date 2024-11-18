
function abrirArquivo(){
    const inputImg = document.getElementById('inputImage')
    inputImg.click()
    inputImg.addEventListener('change', function(){
        const arquivo = inputImg.files[0]
        const leitor = new FileReader()
        leitor.onload = function() {
            const viewImg = document.getElementById('imagemCarregada')
            viewImg.src = leitor.result
        }
        leitor.readAsDataURL(arquivo)
    })

}

function filtroCinza(){
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const viewImg = document.getElementById('imagemCarregada')
    const {width, height} = viewImg
    canvas.width = width
    canvas.height = height
    ctx.drawImage(viewImg, 0 , 0, width, height)
    const dadosImg = ctx.getImageData(0, 0, width, height)
    const {data} = dadosImg
    for (let i = 0; i< data.length; i += 4){
        const cinza = (data[i] + data[i + 1] + data[i + 2] / 3)
        data[i] = cinza
        data[i + 1] = cinza
        data[i + 2] = cinza
    }
    ctx.putImageData(dadosImg, 0, 0)
    viewImg.src = canvas.toDataURL()
}

function inverterCores(){
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const viewImg = document.getElementById('imagemCarregada')
    const {width, height} = viewImg
    canvas.width = width
    canvas.height = height
    ctx.drawImage(viewImg, 0 , 0, width, height)
    const dadosImg = ctx.getImageData(0, 0, width, height)
    const {data} = dadosImg
    for (let i = 0; i< data.length; i += 4){
        data[i] = 255 - data[1]
        data[i + 1] = 255 - data[i + 1]
        data[i + 2] = 255 - data[i + 2]
    }
    ctx.putImageData(dadosImg, 0, 0)
    viewImg.src = canvas.toDataURL()

}

function filtroContraste () {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const viewImg = document.getElementById('imagemCarregada')
    const {width, height} = viewImg
    canvas.width = width
    canvas.height = height
    ctx.drawImage(viewImg, 0 , 0, width, height)
    const dadosImg = ctx.getImageData(0, 0, width, height)
    const {data} = dadosImg
    const valorContraste = 1.5
    for (let i = 0; i< data.length; i += 4){
        data[i] = 128 + (data[i] - 128) * valorContraste
        data[i + 1] = 128 + (data[i + 1] - 128) * valorContraste
        data[i + 2] = 128 + (data[i + 2] - 128) * valorContraste
    }
    ctx.putImageData(dadosImg, 0, 0)
    viewImg.src = canvas.toDataURL()
}


const btnOpen = document.getElementById('open').addEventListener('click', abrirArquivo)
const btnCinza = document.getElementById('cinza').addEventListener('click', filtroCinza)
const btnInverterCores = document.getElementById('inverterCores').addEventListener('click', inverterCores)
const btnContraste = document.getElementById('contraste').addEventListener('click', filtroContraste)