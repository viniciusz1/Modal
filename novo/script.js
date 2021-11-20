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
    let cancelar = document.createElement('button')
    cancelar.innerText = 'Cancelar'
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
    cancelar.onclick = function () {
        removerFundo();
    }
    function MensagemDeErro() {

        let nome2 = nome.value;
        let sobreNome2 = sobreNome.value;
        let data2 = data.value;

        if (!nome2 || nome2 == '' || !sobreNome2 || sobreNome2 == '' || !data2 || data2 == '') {
            espaco.remove();
            let alerta = document.createElement('div')
            alerta.className = 'alerta'
            alerta.innerText = 'Preencha os campos acima'
            footer.appendChild(alerta)
            footer.insertBefore(alerta, divBotao)
            return;
        } else {
            let variavel = {
                nome: nome2,
                sobreNome:sobreNome2,
                data: data2
            }
            lista.push(variavel);
            
            espaco.remove()
            let alertaVerde = document.createElement('div')
            footer.insertBefore(alertaVerde, divBotao)
            alertaVerde.className = 'alertaVerde'
            alertaVerde.innerText = 'Cadastro Realizado'
            footer.appendChild(alertaVerde)            
            removerFundo();
        }
    }
    
    cadastrar.onclick = MensagemDeErro;
    return retorno;

}

function juntarConteudoModal() {
    modal = criaModal();
    conteudo = criaConteudoModal(modal.removerFundo);
    modal.insertHeader(conteudo.header)
    modal.insertMain(conteudo.main)
    modal.insertFooter(conteudo.footer)
}
botao.onclick = juntarConteudoModal;