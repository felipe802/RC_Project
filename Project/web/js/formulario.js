document.getElementById('meuFormulario').addEventListener('submit', function(evento) {
    evento.preventDefault();

    const inputMensagem = document.getElementById('mensagem');
    const textoDigitado = inputMensagem.value;
    const boxResposta = document.getElementById('respostaServidor');
    const botao = document.querySelector('button');

    // Estado de carregamento no botão
    botao.textContent = 'Enviando...';
    botao.disabled = true;

    const dadosParaEnviar = "conteudo=" + encodeURIComponent(textoDigitado);

    // Seu servidor C está configurado para responder qualquer POST
    fetch('/enviar-dados', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: dadosParaEnviar
    })
    .then(resposta => resposta.text())
    .then(texto => {
        // Mostra a resposta e estiliza
        boxResposta.innerText = texto;
        boxResposta.className = 'resposta-visivel';
        
        // Limpa o input e restaura o botão
        inputMensagem.value = '';
        botao.textContent = 'Enviar via POST';
        botao.disabled = false;
    })
    .catch(erro => {
        console.error("Erro na comunicação:", erro);
        boxResposta.innerText = "Erro ao enviar dados para o servidor.";
        boxResposta.style.background = "#fee2e2";
        boxResposta.style.color = "#991b1b";
        boxResposta.className = 'resposta-visivel';
        
        botao.textContent = 'Enviar via POST';
        botao.disabled = false;
    });
});
