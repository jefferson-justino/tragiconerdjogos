let campo = document.getElementById('campo')
let resultados = document.getElementById('resultados')


console.log(jogos[0].nome)
let guardarJogos= ''

function exibir(){    
for (let i = 0; i < jogos.length; i++) {
        guardarJogos += `
        <a href=${jogos[i].link} target='_blank' class='linkCard'>
        <div class = 'card'>
        <img src=${jogos[i].imagem} alt='Imagem do jogo' class = 'imagemCard'/>
        <h3 class='nomeCard'>${jogos[i].nome}</h3>
        </div>
        </a>`}
        resultados.innerHTML=guardarJogos
}
exibir()


function pesquisa() {
    let valorPesquisado = campo.value
    let encontrou = false
    guardarJogos = ``
    for (let i = 0; i < jogos.length; i++) {
        if (jogos[i].nome.toLowerCase().includes(valorPesquisado)) {
            guardarJogos += `
            <a href=${jogos[i].link} target='_blank' class='linkCard'>
            <div class = 'card'>
            <img src=${jogos[i].imagem} alt='Imagem do jogo' class = 'imagemCard'/>
            <h3 class='nomeCard'>${jogos[i].nome}</h3>
            </div>
            </a>`
            encontrou = true

        }
        
    }
    resultados.innerHTML=guardarJogos
    if (!encontrou) {
        resultados.innerHTML = `<h3 class='nomeCard'>Nenhum Guia encontrado :(</h3>
        `

    }

}

campo.addEventListener('keypress', (event)=>{
    if(event.key=='Enter'){
        pesquisa()
    }
  
})