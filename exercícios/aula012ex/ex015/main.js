function carregar() {
    var horario = new Date()
    var hora = horario.getHours()
    var background = document.getElementsByTagName('body')[0]
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        background.style.backgroundColor = 'burlywood'
        imagem.src = 'imagens/imagem-dia.jpg'
    } else if (hora < 19) {
        background.style.backgroundColor = 'chocolate'
        imagem.src = 'imagens/imagem-tarde.jpg'
    } else {
        background.style.backgroundColor = 'darkslategray'
        imagem.src = 'imagens/imagem-noite.jpg'
    }
}