let botao = document.createElement('button');
let button = document.createTextNode("Botão");
botao.appendChild(button);
document.body.appendChild(botao);
let corpo = document.querySelector('body');
corpo.className = 'corpo';


function montarModal() {
    let fundo = document.createElement('div')
    fundo.className = 'fundo';
    let modal = document.createElement('div')
    modal.className = 'modal';
    let header = document.createElement('div');
    header.className = 'header';
    let main = document.createElement('div');
    main.className = 'main';
    let footer = document.createElement('div');
    footer.className = 'footer';
    corpo.appendChild(fundo);
    fundo.appendChild(modal);
    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);
    let retorno = {
        removerFundo: fundo.remove,
        insertHeader: function (html) {
            header.appendChild(html)
        },
        insertMain: function (html) { main.appendChild(html) },
        insertFooter: function (html) { footer.appendChild(html) }
    }
    return retorno;
}

function montarConteudoModal() {
    let header = document.createElement('div');
    header.className = 'header';
    let main = document.createElement('div');
    main.className = 'main';
    let footer = document.createElement('div');
    footer.className = 'footer';

    let titulo = document.createElement('h1')
    titulo.innerText = 'Cadastro de Pessoa';
    titulo.className = 'titulo';
    header.appendChild(titulo);

    let tituloInput = document.createElement('p');
    tituloInput.innerText = 'Nome';
    tituloInput.className = 'tituloInput';
    main.appendChild(tituloInput);
    let conteudo1 = document.createElement('input');
    conteudo1.className = 'conteudo1';
    main.appendChild(conteudo1);

    let sobrenome = document.createElement('p');
    sobrenome.innerText = 'Sobrenome';
    sobrenome.className = 'sobrenome';
    main.appendChild(sobrenome);
    let conteudo2 = document.createElement('input');
    conteudo2.className = 'conteudo2';
    main.appendChild(conteudo2);

    let data = document.createElement('p');
    data.innerText = 'Data de nascimento';
    data.className = 'data';
    main.appendChild(data);
    let conteudo3 = document.createElement('input');
    conteudo3.type = 'date';
    conteudo3.className = 'conteudo3';
    main.appendChild(conteudo3);

    let botaoCadastrar = document.createElement('button');
    botaoCadastrar.innerText = 'Cadastrar';
    botaoCadastrar.className = 'botaoCadastrar';
    footer.appendChild(botaoCadastrar);

    let botaoCancelar = document.createElement('button');
    botaoCancelar.innerText = 'Cancelar';
    botaoCancelar.className = 'botaoCancelar';
    footer.appendChild(botaoCancelar);

    let retorno = {
        header: header,
        main: main,
        footer: footer,
    };

    botaoCancelar.onclick = function () {
        fundo.remove();
    }
    return retorno;
}

function juntarModalEConteudo() {
    let modal = montarModal();
    let conteudo = montarConteudoModal();
    modal.insertHeader(conteudo.header);
    modal.insertMain(conteudo.main);
    modal.insertFooter(conteudo.footer);
}


botao.onclick = juntarModalEConteudo;