
let body = document.querySelector('body');
let botao = document.createElement('button');
body.appendChild(botao);
botao.innerText = 'Modal';
botao.className = 'botao';



function abrirModal(titulo){
    let fundo = document.createElement('div');
    fundo.className = 'fundo';
    body.appendChild(fundo);
    let modal = document.createElement('div');
    modal.className = 'modal';
    fundo.appendChild(modal);
    function titulo(){
        let titulo = document.createElement('h1');
        titulo.className = 'titulo';
        modal.appendChild(titulo);
        titulo.innerText = 'Título do Modal';
    }
    titulo();

    let div_input = document.createElement('div');
    div_input.className = 'div_input';
    modal.appendChild(div_input);

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
    subTitulo2.innerText = 'Sobrenome';
    
    let sobreNome = document.createElement('input');
    sobreNome.className = 'sobreNome';
    div_input.appendChild(sobreNome);

    let subTitulo3 = document.createElement('h4');
    subTitulo3.className = 'subTitulo';
    div_input.appendChild(subTitulo3);
    subTitulo3.innerText = 'Data de Nascimento';

    let dataDeNascimento = document.createElement('input');
    dataDeNascimento.className = 'dataDeNascimento';
    dataDeNascimento.type = 'date';
    div_input.appendChild(dataDeNascimento);


    let pBotao = document.createElement('div');
    pBotao.className = 'pBotao';
    modal.appendChild(pBotao)

    let cadastrar = document.createElement('button');
    pBotao.appendChild(cadastrar);
    cadastrar.innerText = 'Cadastrar';
    cadastrar.className = 'botao';

    let cancelar = document.createElement('button');
    pBotao.appendChild(cancelar);
    cancelar.innerText = 'Cancelar';
    cancelar.className = 'botao';
    
    cancelar.onclick = function(){
        fundo.remove();
    };

}


botao.onclick = abrirModal;

