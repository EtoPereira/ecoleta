function popularUfs() {
    const selecionarUf = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => {
            return res.json()
        }).then((estados) => {

            for (const estado of estados) {
                selecionarUf.innerHTML += `<option value=${estado.id}>${estado.nome}</option>`
            };
        });


}

popularUfs();

function buscarCidades(event) {

    const selecionarCidade = document.querySelector("select[name=city]");
    const inputEstado = document.querySelector("[name=state");

    const valorUf = event.target.value;
    const indexDoEstadoSelecionado = event.target.selectedIndex;
    inputEstado.value = event.target.options[indexDoEstadoSelecionado].text;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${valorUf}/municipios`;

    selecionarCidade.innerHTML = "";
    selecionarCidade.disabled = true;

    fetch(url)
        .then((res) => { return res.json() })
        .then(cidades => {
            for (cidade of cidades) {

                selecionarCidade.innerHTML += `<option value=${cidade.nome}>${cidade.nome}</option>`;
            }
            selecionarCidade.disabled = false;
        })
}


document.querySelector("select[name=uf]")
    .addEventListener("change", buscarCidades);

// popularUfs();

//items de coleta
//pegar todos li's

const itensColeta = document.querySelectorAll(".itens-grid li")
console.log(itensColeta);

for (const item of itensColeta) {
    console.log(item);

    item.addEventListener("click", handleSelectedItem)
}

const ItensColetados = document.querySelector("input[name=items]")
let itensSelecionados = [];

function handleSelectedItem(event) {

    const itemLi = event.target;

    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;


    const jaSelecionado = itensSelecionados.findIndex(item => {

        const itemEncontrado = item == itemId

        return itemEncontrado;
    })

    if (jaSelecionado >= 0) {
        const itensFiltrados = itensSelecionados.filter(function (item) {
            const itemEhDiferente = item != itemId;
            return itemEhDiferente;
        });
        itensSelecionados = itensFiltrados

    } else {
        itensSelecionados.push(itemId)
    }

    ItensColetados.value = itensSelecionados;


}