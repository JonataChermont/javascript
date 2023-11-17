var horario = new Date()
var hora = horario.getHours()
var minuto = horario.getMinutes()
console.log(`Agora são ${hora}:${minuto}h no horário de Brasília.`)

if (hora < 6 && minuto <= 59) {
    console.log('Boa madrugada!')
} else if (hora < 12 && minuto <= 59) {
    console.log('Bom dia!')
} else if (hora < 19 && minuto <= 59) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
