
function verificar() {
    var tempo = new Date()
    var AnoAtual = tempo.getFullYear()
    var AnoNascimento = document.getElementById('idano-nascimento')
    var mensagem = document.getElementById('mensagem')
    
    if (AnoNascimento.value.length == 0 || Number(AnoNascimento.value) > AnoAtual) {
        mensagem.innerHTML = `[ERRO] verifique se os dados estão corretos!`
    } else {
        var idade = AnoAtual - Number(AnoNascimento.value)
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var imagem = document.getElementById('imagem')
        var FaixaEtaria = ''
        imagem.style.width = '250px'
        imagem.style.height = '250px'
        imagem.style.backgroundRepeat = 'no-repeat'
        imagem.style.backgroundPosition = 'center center'

        if (sexo[0].checked) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }

        if (idade > 0 && idade < 12) {
            FaixaEtaria = 'crianca'
        } else if (idade < 20) {
            FaixaEtaria = 'adolescente'
        } else if (idade < 50) {
            FaixaEtaria = 'adulto'
        } else {
            FaixaEtaria = 'idoso'
        }

        if (genero == 'Homem' && FaixaEtaria == 'idoso') {
            imagem.style.backgroundPosition = 'center top'
            imagem.style.borderRadius = '50%'
        }

        imagem.style.backgroundImage = `url(imagens/${FaixaEtaria}-${genero.toLowerCase()}.png)`
        mensagem.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
