function alterarStatus(id) {
    let senhaM = 'Windows'
    let senhaT = 'Gnu Linux'
    let senhaTI = 'MacOS'
    let jogo = document.getElementById(`game-${id}`)
    let botaoStatus = jogo.querySelector('a')
    if(botaoStatus.innerHTML == 'Devolver') {
        alterarNomeBotao(id)
        alterarStatusBotao(id)
        alterarStatusImagem(id)
    } else {
        if(id == 1) {
            let tentativa = prompt('Qual a Chave do jogo?')
            if(tentativa == senhaM) {
            alterarNomeBotao(id)
            alterarStatusImagem(id)
            alterarStatusBotao(id)
            console.log('FábioPires é foda')
            }  else {
                alert('Erro senha inválida')
            }
        }
        if(id == 2) {
            let tentativa = prompt('Qual a Chave do jogo?')
            if(tentativa == senhaT) {
            alterarNomeBotao(id)
            alterarStatusImagem(id)
            alterarStatusBotao(id)
            console.log('FábioPires é foda')
            }  else {
                alert('Erro senha inválida')
            }
        }
        if(id == 3) {
            let tentativa = prompt('Qual a Chave do jogo?')
            if(tentativa == senhaTI) {
            alterarNomeBotao(id)
            alterarStatusImagem(id)
            alterarStatusBotao(id)
            console.log('FábioPires é foda')
            } else {
                alert('Erro senha inválida')
            }
        }
    }
}
function alterarNomeBotao(id) {
    let jogo = document.getElementById(`game-${id}`)
    let botaoStatus = jogo.querySelector('a')
    if(botaoStatus.innerHTML == 'Alugar') {
    botaoStatus.innerHTML = 'Devolver'
} else {
    botaoStatus.innerHTML = 'Alugar'
    }
}
function alterarStatusImagem(id) {
    let jogo = document.getElementById(`game-${id}`)
    let imagem = jogo.querySelector('.dashboard__item__img')
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented')
    } else {
        imagem.classList.add('dashboard__item__img--rented')
    }
}
function alterarStatusBotao(id) {
    let jogo = document.getElementById(`game-${id}`)
    let botao = jogo.querySelector('.dashboard__item__button')
    if(botao.classList.contains('dashboard__item__button--return')) {
        alert(`Você esta devolvendo o jogo ${jogo.textContent}`)
        botao.classList.remove('dashboard__item__button--return')
    } else {
        alert(`Você esta alugando o jogo ${jogo.textContent}`)
        botao.classList.add('dashboard__item__button--return')
    }
}
