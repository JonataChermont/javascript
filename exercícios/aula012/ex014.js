var horario = new Date()
var dia = horario.getDate()
var mes = horario.getMonth()
var ano = horario.getFullYear()
var DiaSemana = horario.getDay()
/*
    0 = domingo
    1 = segunda-feira
    2 = terça-feira
    3 = quarta-feira
    4 = quinta-feira
    5 = sexta-feira
    6 = sábado
*/

switch(DiaSemana){
    case 0:
        DiaSemana = 'domingo'
        break
    case 1:
        DiaSemana = 'segunda-feira'
        break
    case 2:
        DiaSemana = 'terça-feira'
        break
    case 3:
        DiaSemana = 'quarta-feira'
        break
    case 4:
        DiaSemana = 'quinta-feira'
        break
    case 5:
        DiaSemana = 'sexta-feira'
        break
    case 6:
        DiaSemana = 'sábado'
        break
    default:
        DiaSemana = '[ERRO] dia inválido'
        break
}

console.log(`A data atual é ${dia}-${mes + 1}-${ano}, uma ${DiaSemana}`)