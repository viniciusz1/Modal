let chat = document.querySelector('#chat');
let inputNomePessoa1 = document.querySelector('#nomePessoa1');
let inputMensagemPessoa1 = document.querySelector('#mensagemPessoa1');
let inputNomePessoa2 = document.querySelector('#nomePessoa2');
let inputMensagemPessoa2 = document.querySelector('#mensagemPessoa2');

function enviarMensagemPessoa1() {
    let nome = inputNomePessoa1.value;
    let mensagem = inputMensagemPessoa1.value;
    if (!nome || nome == '') {
        return;
    }
    if (!mensagem || mensagem == '') {
        return;
    }
    let elementoHTML = montarMensagem(nome, mensagem, 'fundoVerde');
    chat.appendChild(elementoHTML);
    inputMensagemPessoa1.value = '';
}

function enviarMensagemPessoa2() {
    let nome = inputNomePessoa2.value;
    let mensagem = inputMensagemPessoa2.value;
    if (!nome || nome == '') {
        return;
    }
    if (!mensagem || mensagem == '') {
        return;
    }
    let elementoHTML = montarMensagem(nome, mensagem, 'fundoAzul');
    chat.appendChild(elementoHTML);
    inputMensagemPessoa2.value = '';
}

function montarMensagem(nome, mensagem, classe) {
    let paragrafo = document.createElement('div');
    // paragrafo.innerText = nome + ': ' + mensagem;
    paragrafo.className = 'containerMensagem ' + classe;
    let mensagemParagrafo = document.createElement('p');
    let data = document.createElement('p');
    data.className = 'alinhaADireita';
    mensagemParagrafo.innerText = nome + ': ' + mensagem;
    data.innerText = '16/11/2021 18:30';

    paragrafo.appendChild(mensagemParagrafo);
    paragrafo.appendChild(data);
    return paragrafo;
}
