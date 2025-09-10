const { expect } = require('chai');
const { listarFrutas, adicionarNovaFrutaNaLista } = require('../src/gerenciadorDeFrutas')

describe('Testes de gerenciamento da feira de frutas', function() {
    it('Deve listar a lista de feira de frutas', function() {
        const lista = listarFrutas();
        console.log(lista)
    });

    it('Deve adicionar uma nova fruta com sucesso a lista', function() {
        const novaFruta = adicionarNovaFrutaNaLista({
            fruta: 'Melão',
            peso: '100 gramas',
            total: 25,
            preco: 10.00
        });
        expect(listarFrutas().at(-1)).to.eql({
            fruta: 'Melão',
            peso: '100 gramas',
            total: 25,
            preco: 10.00
        })
        console.log(novaFruta)
    });
});