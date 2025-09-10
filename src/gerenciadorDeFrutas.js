//Criar a lista de frutas
const feiraDeFrutas = [
    {
        fruta: 'Laranja',
        peso: '10 gramas',
        total: 50,
        preco: 2.00
    },
    {
        fruta: 'Banana',
        peso: '40 gramas',
        total: 70,
        preco: 5.00
    },
    {
        fruta: 'Mamão',
        peso: '60 gramas',
        total: 20,
        preco: 4.00
    },
    {
        fruta: 'Abacaxi',
        peso: '100 gramas',
        total: 25,
        preco: 8.00
    },
]

//Criar a função de listar frutas
function listarFrutas(){
    return feiraDeFrutas;
}

//criar a função de adicionar nova fruta a lista
function adicionarNovaFrutaNaLista(fruta){
    feiraDeFrutas.push(fruta)
}

module.exports = {
    listarFrutas,
    adicionarNovaFrutaNaLista
}