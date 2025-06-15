const perguntas = [
    {
        pergunta: "A crase deve ser utilizada em todas as opções abaixo, exceto: ",
        opcoes: ["antes de palavras femininas", "quando acompanham verbos que indicam destino (ir, voltar, vir)", "na indicação de horas exatas.", "antes de palvras masculinas"],
        correta: "antes de palvras masculinas"
    },
    {
        pergunta: "Qual frase abaixo está gramaticalmente incorreta?",
        opcoes: ["Vou à padaria.", "Fomos à praia.", "Voltei à loja e fui bem atendido.", "Saímos a noite."],
        correta: "Saímos a noite."
    },
    {
        pergunta: "Quando não se usa crase?",
        opcoes: ["Antes de verbos", "antes de palavras femininas", "na indicação de horas exatas.", "nas locuções adverbiais, prepositivas e conjuntivas"],
        correta: "Antes de verbos"
    },
    {
        pergunta: "Assinale a alternativa em que o uso da crase está correto:",
        opcoes: ["Ele foi a farmácia comprar remédios.", "Cheguei a escola às 7h.", "Entreguei o presente à diretora da escola.", "Voltaram a reunião ontem."],
        correta: "Entreguei o presente à diretora da escola."
    },
    {
        pergunta: "Assinale a alternativa em que o uso da crase está adequado em uma locução:",
        opcoes: ["Estava a vontade para falar sobre tudo.", " Ela agiu à maneira que achou melhor.", "Ele andava à toa pela rua.", "Entregou o presente a moda antiga."],
        correta: "Ele andava à toa pela rua."
    },
    {
        pergunta: "Assinale a alternativa em que o uso da crase está correto antes de pronome demonstrativo:",
        opcoes: ["Referi-me a aquele livro de filosofia.", "Refiro-me àquele artigo publicado ontem.", "Não entendi a aquela explicação.", "Aquele exercício estava difícil à mim."],
        correta: "Refiro-me àquele artigo publicado ontem."
    },
    {
        pergunta: "Assinale a alternativa correta quanto ao uso da crase em indicação de horário.",
        opcoes: ["A reunião será realizada à 15 horas.", "O evento começará as 18h.", "A entrevista está marcada à 14h30.", "Cheguei a uma hora da tarde."],
        correta: "A entrevista está marcada à 14h30."
    },
    {
        pergunta: "Assinale a frase com uso correto da crase em uma expressão feminina.",
        opcoes: ["Eles estavam a frente dos demais.", "Entregou o pedido à mão.", "Saiu a francesa, sem dizer nada.", "Este projeto está a disposição."],
        correta: "Entregou o pedido à mão."
    },
    {
        pergunta: "Assinale a alternativa com uso correto da crase antes de nome de cidade.",
        opcoes: ["Cheguei a Roma com antecedência.", "Fomos à Lisboa em 2018.", "Viajamos à Bahia no verão.", "Voltamos a Curitiba no mesmo dia."],
        correta: "Viajamos à Bahia no verão."
    },
    {
        pergunta: "Indique a alternativa em que o uso da crase está incorreto.",
        opcoes: ["Dei o presente a João.", "Cheguei à João com a notícia.", "Falei a Pedro sobre o projeto.", "Enviei a mensagem a Rafael."],
        correta: "Cheguei à João com a notícia."
    },
    {
        pergunta: "Em qual alternativa o uso da crase está incorreto por estar antes de um verbo?",
        opcoes: ["Começou à estudar mais tarde.", "Pretende assistir ao filme.", "Costuma acordar cedo.", "Gosta de caminhar pela manhã."],
        correta: "Começou à estudar mais tarde."
    },
    {
        pergunta: "Assinale a alternativa em que o uso da crase está incorreto.",
        opcoes: ["Entreguei a ela os documentos.", "Dei o caderno à minha irmã.", "Ofereci ajuda à senhora.", "Pedi desculpas àquela moça."],
        correta: "Dei o caderno à minha irmã."
    },
    {
        pergunta: "Assinale a alternativa em que o uso da crase está incorreto.",
        opcoes: ["Voltamos à Bélgica no fim do mês.", "Viajamos à França no inverno.", "Fomos à Roma conhecer o Vaticano.", "Chegamos à Argentina de manhã."],
        correta: "Fomos à Roma conhecer o Vaticano."
    },
    {
        pergunta: "Assinale a alternativa em que o uso da crase está incorreto.",
        opcoes: ["Cara a cara, resolveram a situação.", "Frente à frente, discutiram.", "Dia a dia, tudo melhorava.", "Passaram noite a noite conversando."],
        correta: "Frente à frente, discutiram."
    },
    {
        pergunta: "Assinale a alternativa em que a crase foi usada incorretamente.",
        opcoes: ["Comprei de 3 à 5 cadernos.", "Estavam entre 5 e 10 pessoas na sala.", "O desconto vai de 10 a 20%.", "Foram necessários de 2 a 4 dias."],
        correta: "Comprei de 3 à 5 cadernos."
    },
    {
        pergunta: "No segmento “cheirando a piche” (segundo período do segundo parágrafo), o emprego do sinal indicativo de crase no vocábulo “a” é opcional.",
        opcoes: ["Certo", "Errado"],
        correta: "Errado"
    },
    {
        pergunta: "Haveria prejuízo à correção gramatical se fosse inserido um acento grave indicativo de crase em “Graças a tais estudos”, da seguinte forma: Graças à tais estudos.",
        opcoes: ["Certo", "Errado"],
        correta: "Certo"
    },
    {
        pergunta: "É facultativo o emprego do sinal indicativo de crase no vocábulo “a”, no trecho “acesso a elas”.",
        opcoes: ["Certo", "Errado"],
        correta: "Errado"
    },
    {
        pergunta: "4. Em “à nossa ideia de natureza” (primeiro período), é obrigatório o emprego do sinal indicativo de crase no vocábulo “à”.",
        opcoes: ["Certo", "Errado"],
        correta: "Errado"
    },
    {
        pergunta: "A omissão do sinal indicativo de crase no “à” na expressão “danos à vegetação” (linha 13) promoveria incorreção gramatical ao texto.",
        opcoes: ["Certo", "Errado"],
        correta: "Certo"
    }
];

let indiceAtual = 0;
let pontos = 0;

const somAcerto = new Audio('correct-answer-sound.mp3');
const somErro = new Audio('wrong-answer-sound.mp3');

function carregarPergunta() {
    removerBaloes(); // Limpa balões anteriores
    const q = perguntas[indiceAtual];
    document.getElementById("pergunta").textContent = q.pergunta;

    const botoes = document.querySelectorAll(".opcao button");
    botoes.forEach((botao, index) => {
        if (index < q.opcoes.length) {
            botao.textContent = q.opcoes[index];
            botao.style.display = "block"; // Mostra o botão
            botao.disabled = false;
        } else {
            botao.style.display = "none"; // Oculta o botão se não houver opção
        }
    });

    document.getElementById("resultado").textContent = "";
    atualizarProgresso();
}

function criarBaloes(quantidade) {
    console.log(`Criando ${quantidade} balões...`);
    for (let i = 0; i < quantidade; i++) {
        const balao = document.createElement("div");
        balao.classList.add("balao");

        // Cor aleatória
        balao.style.backgroundColor = gerarCorAleatoria();

        // Tamanho aleatório
        const tamanho = Math.random() * 20 + 30;
        balao.style.width = tamanho + "px";
        balao.style.height = tamanho + "px";

        // Posição aleatória
        balao.style.left = Math.random() * (window.innerWidth - tamanho) + "px";
        balao.style.bottom = "0px";

        // Tempo de animação
        const duracao = (Math.random() * 2 + 3).toFixed(2);
        balao.style.animationDuration = `${duracao}s`;

        document.body.appendChild(balao);

        // Remove após animação
        setTimeout(() => {
            balao.remove();
        }, duracao * 1000);
    }
}

function gerarCorAleatoria() {
    const cores = ["#FF5733", "#FF33A6", "#33FF57", "#3357FF", "#FFFF33", "#FF8C33"];
    return cores[Math.floor(Math.random() * cores.length)];
}

function removerBaloes() {
    const baloes = document.querySelectorAll(".balao");
    baloes.forEach(balao => balao.remove());
}

function verificarResposta(botao) {
    const q = perguntas[indiceAtual];
    const resultado = document.getElementById("resultado");

    if(botao.textContent === q.correta) {
        resultado.textContent = "Parabéns! Você acertou!";
        resultado.style.color = "green";
        pontos++;
        somAcerto.currentTime = 0;
        somAcerto.play().catch(err => console.log('Erro ao tocar som de acerto:', err));
        criarBaloes(70);
    } else {
        resultado.textContent = "Ops! Resposta errada.";
        resultado.style.color = "red";
        somErro.currentTime = 0;
        somErro.play().catch(err => console.log('Erro ao tocar som de erro:', err));
        
    }


    atualizarPontuacao();

    // Desativa botões para evitar múltiplos cliques
    const botoes = document.querySelectorAll(".opcao button");
    botoes.forEach(b => b.disabled = true);

    // Espera 1 segundo e passa para a próxima pergunta
    setTimeout(() => {
        indiceAtual++;
        if(indiceAtual < perguntas.length) {
            carregarPergunta();
        } else {
            finalizarQuiz();
        }
    }, 1000);
}

function atualizarProgresso() {
    const progresso = ((indiceAtual) / perguntas.length) * 100;
    document.getElementById("progresso").style.width = progresso + "%";
}

function atualizarPontuacao() {
    document.getElementById("pontuacao").textContent = "Pontos: " + pontos;
}

function finalizarQuiz() {
    document.querySelector(".quiz-container").innerHTML = `
        <h2>Quiz Finalizado!</h2>
        <p>Sua pontuação: ${pontos} de ${perguntas.length}</p>
    `;
}

carregarPergunta();
