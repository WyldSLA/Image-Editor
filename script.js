const inputImage = document.getElementById('inputImg'),
      inputMedidor = document.querySelector('.ajuste #medidor'),
      valorMedidor = document.querySelector('.ajuste #valorMedidor'),
      nomeFiltro = document.querySelector('.ajuste .nomeFiltro'),
      imgCarregada = document.querySelector('.verImg #imagemCarregada'),
      btnsFiltros = document.querySelectorAll('.btn-filtros button');

let brilho = 100, saturacao = 100, inversao = 0, escalacinza = 0, sepia = 0, desfoque = 0, contraste = 100;
let filtroAtual = 'brilho';

const aplicarFiltros = () => {
    imgCarregada.style.filter = `
        brightness(${brilho}%) 
        saturate(${saturacao}%) 
        invert(${inversao}%) 
        grayscale(${escalacinza}%)
        sepia(${sepia}%) 
        blur(${desfoque}px) 
        contrast(${contraste}%)

    `;
};

const carregarImg = () => {
    const arquivo = inputImage.files[0];
    const leitor = new FileReader();
    leitor.onload = function () {
        imgCarregada.src = leitor.result;
        imgCarregada.addEventListener('load', () => {
            document.querySelector('.container').classList.remove("disable")
        })
        resetarFiltros()
    };
    leitor.readAsDataURL(arquivo);
};

btnsFiltros.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.btn-filtros .active').classList.remove("active")
        btn.classList.add("active")
        filtroAtual = btn.id; 
        nomeFiltro.innerText = btn.innerText;

        if (filtroAtual === "brilho") {
            inputMedidor.max = "200"
            inputMedidor.value = brilho;
            valorMedidor.innerText = `${brilho}%`;
        } else if (filtroAtual === "saturacao") {
            inputMedidor.max = "200"
            inputMedidor.value = saturacao;
            valorMedidor.innerText = `${saturacao}%`;
        } else if (filtroAtual === "inversao") {
            inputMedidor.max = "100"
            inputMedidor.value = inversao;
            valorMedidor.innerText = `${inversao}%`;
        } else if (filtroAtual === "cinza") {
            inputMedidor.max = "100";
            inputMedidor.value = escalacinza;
            valorMedidor.innerText = `${escalacinza}%`;
        } else if (filtroAtual === "contraste") {
            inputMedidor.max = "200";
            inputMedidor.value = contraste;
            valorMedidor.innerText = `${contraste}%`;
        } else if (filtroAtual === "sepia") {
            inputMedidor.max = "100";
            inputMedidor.value = sepia;
            valorMedidor.innerText = `${sepia}%`;
        }else{
            inputMedidor.max = "10";
            inputMedidor.value = desfoque;
            valorMedidor.innerText = `${desfoque}px`;
        }

    });
});

const updateFiltros = () => {
    valorMedidor.textContent = `${inputMedidor.value}%`;

    if (filtroAtual === "brilho") {
        brilho = inputMedidor.value;
    } else if (filtroAtual === "saturacao") {
        saturacao = inputMedidor.value;
    } else if (filtroAtual === "inversao") {
        inversao = inputMedidor.value;
    } else if (filtroAtual === "cinza") {
        escalacinza = inputMedidor.value;
    } else if (filtroAtual === "contraste") {
        contraste = inputMedidor.value;
    } else if (filtroAtual === "sepia") {
        sepia = inputMedidor.value;
    } else {
        desfoque = inputMedidor.value;
    }

    aplicarFiltros(); 
};

const resetarFiltros = () => {
    brilho = 100, saturacao = 100, inversao = 0, escalacinza = 0, sepia = 0, desfoque = 0, contraste = 100;
    filtroAtual = 'brilho';
    btnsFiltros[0].click()
    aplicarFiltros();
}

const salvarImg = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = imgCarregada.naturalWidth;
    canvas.height = imgCarregada.naturalHeight;

    ctx.filter =  `brightness(${brilho}%) saturate(${saturacao}%) invert(${inversao}%) grayscale(${escalacinza}%)sepia(${sepia}%) blur(${desfoque}px) contrast(${contraste}%)`
    ctx.drawImage(imgCarregada, 0, 0, canvas.width, canvas.height)

    const link = document.createElement("a")
    link.download = "imagem-editada.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
}

inputMedidor.addEventListener('input', updateFiltros);
inputImage.addEventListener('change', carregarImg);
document.getElementById('abrir').addEventListener('click', () => inputImage.click());
document.getElementById('resetar').addEventListener('click', resetarFiltros);
document.getElementById('salvar').addEventListener('click', salvarImg)