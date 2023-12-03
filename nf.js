function emitirNotaFiscal(){

    let nome = document.getElementById('input-nome-completo').value;
    let valor = document.getElementById('input-valor-servico').value;
    let data = document.getElementById('input-data').value;
    let descricao = document.getElementById('input-descricao').value;

    let calculoImpostoIss = parseFloat(valor);
    let valorTotalIss = calculoImpostoIss;

    let gerarNotaFiscal = document.getElementById('emissao-nota');
    gerarNotaFiscal.innerHTML = `<strong>NOTA FISCAL DE SERVIÇOS</strong> <br>
                                 <br>
                                 Nome: ${nome} <br> 
                                 Valor total com ISS: R$ ${valorTotalIss + valorTotalIss * 0.05}<br> 
                                 Data: ${data}<br>
                                 Descrição: ${descricao}`;


    gerarNotaFiscal.appendChild();
}