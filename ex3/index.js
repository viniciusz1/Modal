
let body = document.querySelector('body');
let botao = document.createElement('button');
body.appendChild(botao);
botao.innerText = 'Modal';
botao.className = 'botao';


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
    body.appendChild(fundo);
    fundo.appendChild(modal);
    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);
    let retorno = {
        modal: modal,
        removerFundo: function () {fundo.remove()},
        insertHeader: function (html) {
            header.appendChild(html)
        },
        insertMain: function (html) { main.appendChild(html) },
        insertFooter: function (html) { footer.appendChild(html) }
    }
    return retorno;
}

    
function montarConteudo(removerFundo){
    let header = document.createElement('div');
    header.className = 'header';
    let main = document.createElement('div');
    main.className = 'main';
    let footer = document.createElement('div');
    footer.className = 'footer';


    let titulo = document.createElement('h1');
    titulo.className = 'titulo';
    titulo.innerText = 'Título do Modal';

    let div_input = document.createElement('div');
    div_input.className = 'div_input';

    let subTitulo = document.createElement('h4');
    subTitulo.className = 'subTitulo';
    div_input.appendChild(subTitulo);
    subTitulo.innerText = 'Nome:';

    let nome = document.createElement('input');
    nome.className = 'nome';
    div_input.appendChild(nome);

    let subTitulo2 = document.createElement('h4');
    subTitulo2.className = 'subTitulo';
    div_input.appendChild(subTitulo2);
    subTitulo2.innerText = 'Sobrenome:';
    
    let sobreNome = document.createElement('input');
    sobreNome.className = 'sobreNome';
    div_input.appendChild(sobreNome);

    let subTitulo3 = document.createElement('h4');
    subTitulo3.className = 'subTitulo';
    div_input.appendChild(subTitulo3);
    subTitulo3.innerText = 'Data de Nascimento:';

    let dataDeNascimento = document.createElement('input');
    dataDeNascimento.className = 'dataDeNascimento';
    dataDeNascimento.type = 'date';
    div_input.appendChild(dataDeNascimento);

    let pBotao = document.createElement('div');
    pBotao.className = 'pBotao';
    

    let cadastrar = document.createElement('button');
    pBotao.appendChild(cadastrar);
    cadastrar.innerText = 'Cadastrar';
    cadastrar.className = 'botao';

    let cancelar = document.createElement('button');
    pBotao.appendChild(cancelar);
    cancelar.innerText = 'Cancelar';
    cancelar.className = 'botao';

    let retorno = {
        header: titulo,
        main: div_input,
        footer: pBotao,
    };
    cancelar.onclick = function(){
        removerFundo();
    }
    cadastrar.onclick = function(){
            
    let name = nome.value;
    let sname = sobreNome.value;
    let nsc = dataDeNascimento.value;
        
    if (!name || name == ''|| !sname || sname == '' || !nsc || nsc == '') {
        let alerta = document.createElement('div')
        alerta.className = 'alerta'
        alerta.innerText = 'Preencha os campos acima'
        pBotao.appendChild(alerta)
        return;
    }else{
        let alertaVerde = document.createElement('div')
        alertaVerde.className = 'alertaVerde'
        alertaVerde.innerText = 'Preencha os campos acima'
        pBotao.appendChild(alertaVerde)
    }
    
    
    removerFundo();
    }
    return retorno;
}

function juntarModalEConteudo() {
    let modal = montarModal();
    let conteudo = montarConteudo(modal.removerFundo);
    modal.insertHeader(conteudo.header);
    modal.insertMain(conteudo.main);
    modal.insertFooter(conteudo.footer);
}
botao.onclick = juntarModalEConteudo;

