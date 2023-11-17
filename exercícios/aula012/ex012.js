idade = 17

console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 64) {
    console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}
