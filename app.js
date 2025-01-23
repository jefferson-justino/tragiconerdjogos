let campo = document.getElementById('campo')
let resultados = document.getElementById('resultados')



function pesquisa() {
    let guardarJogos= ''
    let valorPesquisado = campo.value.toLowerCase()
    let encontrou = false
   
    for (let i = 0; i < jogos.length; i++) {
        if (valorPesquisado==''|| jogos[i].nome.toLowerCase().includes(valorPesquisado)) { 
          
            
            guardarJogos += ` 
             
            <div class = 'card'> 
            <img src=${jogos[i].imagem} alt='Imagem do jogo' class = 'imagemCard'/> 
            <h3 class='nomeCard'>${jogos[i].nome}</h3> 
            <div class='localBot'>
            <a href=${jogos[i].linkGame} target='_blank' > <button class='botaocomprar'>Comprar Jogo</button></a>
        </div>
            </div> 
            ` 
            encontrou = true 
          

        } 
        
    }
    resultados.innerHTML=guardarJogos
    if (!encontrou) {
        resultados.innerHTML = `<h3 class='nomeCard'>Nenhum Jogo encontrado :(</h3>
        `

    }

}
pesquisa()

campo.addEventListener('input', pesquisa )