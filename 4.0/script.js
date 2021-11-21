let body = document.querySelector('body');

let botao = document.createElement('button');
body.appendChild(botao);
botao.innerText = 'Modal';
botao.className = 'botao';


function criaModal() {
    let fundo = document.createElement('div')
    fundo.className = 'fundo'
    let modal = document.createElement('div')
    modal.className = 'modal'
    let header = document.createElement('header')
    let main = document.createElement('main')
    let footer = document.createElement('footer')

    body.appendChild(fundo);
    fundo.appendChild(modal);
    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);

    let retorno = {
        removerModal: function () { modal.remove() },
        removerFundo: function () { fundo.remove() },
        insertHeader: function (html) { header.appendChild(html) },
        insertMain: function (html) { main.appendChild(html) },
        insertFooter: function (html) { footer.appendChild(html) }
    }
    return retorno;
}
let lista = [];
function criaConteudoModal(removerFundo) {

    let header = document.createElement('div');
    header.className = 'header';
    let main = document.createElement('div');
    main.className = 'main';
    let footer = document.createElement('div');
    footer.className = 'footer';


    let titulo = document.createElement('div')
    titulo.innerText = 'Meu Modal'
    let nome = document.createElement('input')
    nome.placeholder = 'Digite seu nome'
    let sobreNome = document.createElement('input')
    sobreNome.placeholder = 'Digite seu sobrenome'
    let data = document.createElement('input')
    data.type = 'date'
    let espaco = document.createElement('div')
    espaco.className = 'espaco'
    let divBotao = document.createElement('div')
    divBotao.className = 'divBotao'
    let cadastrar = document.createElement('button')
    cadastrar.innerText = 'Cadastrar'
    cadastrar.onclick = function () {
        MensagemDeErro();
    }
    let cancelar = document.createElement('button')
    cancelar.innerText = 'Cancelar'
    cancelar.onclick = function () {
        removerFundo();
    }

    header.appendChild(titulo)
    main.appendChild(nome)
    main.appendChild(sobreNome)
    main.appendChild(data)
    footer.appendChild(espaco)
    footer.appendChild(divBotao)
    divBotao.appendChild(cadastrar)
    divBotao.appendChild(cancelar)

    let retorno = {
        header: header,
        main: main,
        footer: footer
    }


    function MensagemDeErro() {

        let nome2 = nome.value;
        let sobreNome2 = sobreNome.value;
        let data2 = data.value;

        let dados = {
            d1: nome2,
            d2: sobreNome2,
            d3: data2
        }
        lista.push(dados)


        if (!nome2 || nome2 == '' || !sobreNome2 || sobreNome2 == '' || !data2 || data2 == '') {
            espaco.remove();
            let alerta = document.createElement('div')
            alerta.className = 'alerta'
            alerta.innerText = 'Preencha os campos acima'
            footer.appendChild(alerta)
            footer.insertBefore(alerta, divBotao)
            return;
        } else {


            setTimeout(removerFundo, 3000)
            espaco.remove()
            let alertaVerde = document.createElement('div')
            alertaVerde.className = 'alertaVerde'
            alertaVerde.innerText = 'Cadastro Realizado'
            footer.appendChild(alertaVerde)
            footer.insertBefore(alertaVerde, divBotao)
            linhaPredefinida();
            criaTabela();
        }
    }
    return retorno;
}

let tabelaTable = document.createElement('table')
tabelaTable.className = 'tabela'

function linhaPredefinida() {
    let linha = document.createElement('tr')
    let nome = document.createElement('td')
    let sobreNome = document.createElement('td')
    let data = document.createElement('td')

    nome.innerText = 'Nome'
    sobreNome.innerText = 'Sobrenome'
    data.innerText = 'Data'


    tabelaTable.appendChild(linha)
    linha.appendChild(nome)
    linha.appendChild(sobreNome)
    linha.appendChild(data)
}
function criaTabela() {
    let contagem = 0;
    let linha = document.createElement('tr')
    let nome = document.createElement('td')
    let sobreNome = document.createElement('td')
    let data = document.createElement('td')
    let contador = document.createElement("td");
    contador.className = 'contagem';
    let objeto = lista[contagem]

    data.innerText = objeto.d3
    contador.innerText = (contagem + 1);
    nome.innerText = objeto.d1
    sobreNome.innerText = objeto.d2

    body.appendChild(tabelaTable)
    tabelaTable.appendChild(linha)
    linha.appendChild(nome)
    linha.appendChild(sobreNome)
    linha.appendChild(data)
    linha.appendChild(contador)


}
function juntarConteudoModal() {
    modal = criaModal();
    conteudo = criaConteudoModal(modal.removerFundo);
    modal.insertHeader(conteudo.header)
    modal.insertMain(conteudo.main)
    modal.insertFooter(conteudo.footer)
}
botao.onclick = juntarConteudoModal;