
let numSecreto = gerarNum()
let tentativas = 1
function getTag(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate:1.2})
}
function gerarNum(){
  return parseInt(Math.random() * 10 +1)
    
}
function verificarChute(){
    let chute = document.querySelector('input').value
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
    if(chute == numSecreto){
        getTag('p', `Acertou com  ${tentativas} ${palavraTentativas}! O número secreto é ${numSecreto}!`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if(numSecreto > chute){
        getTag('p', `o número secreto é maior que  ${chute}, tente novamente`)
        }
        else{
            getTag('p', `o número secreto é menor que  ${chute}, tente novamente`)
        }
    }
    tentativas++
    clear()
}

function clear(){
    let campo =  document.querySelector('input')

    campo.value = ''
}
function reset(){
clear()
numSecreto = gerarNum()
tentativas = 1
document.getElementById('reiniciar').setAttribute('disabled', true)
    getTag('p', 'Escolha um número entre 1 a 10')
}