function simulacao(valorSolicitado, valorMinimo, taxaDeCusto, res) {
    console.log('Iniciando simulação...');

    let custoDeEmissao;
    let valorTotal;

    let taxaDeCustoEmDecimal = taxaDeCusto / 100;

    if (valorSolicitado * taxaDeCustoEmDecimal > valorMinimo) {
        custoDeEmissao = valorSolicitado * taxaDeCustoEmDecimal;
        valorTotal = valorSolicitado + custoDeEmissao;

        console.log('Custo de Emissão (via taxaDeCusto):', custoDeEmissao);
        console.log('Valor Total (via taxaDeCusto):', valorTotal);

        res.status(200).json({
            mensagem: 'Simulação realizada com sucesso!',
            custoDeEmissao: custoDeEmissao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            valorTotal: valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            valorSolicitado: valorSolicitado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        });
    } else {
        valorTotal = valorSolicitado + valorMinimo;
        custoDeEmissao = valorMinimo;

        console.log('Custo de Emissão (via valorMinimo):', valorMinimo);
        console.log('Valor Total (via valorMinimo):', valorTotal);

        res.status(200).json({
            mensagem: 'Simulação realizada com sucesso!',
            custoDeEmissao: custoDeEmissao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            valorTotal: valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            valorSolicitado: valorSolicitado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        });
    }

    console.log('Simulação concluída.');
}

export { simulacao };
