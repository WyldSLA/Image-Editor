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


const btnOpen = document.getElementById('open').addEventListener('click', abrirArquivo)