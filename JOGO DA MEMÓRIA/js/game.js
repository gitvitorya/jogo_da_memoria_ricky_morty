console.log("game js carregado");
const spanPlayer = document.querySelector('.player');
var nomeJogador = localStorage.getItem('player');
spanPlayer.innerText = nomeJogador;
console.log(nomeJogador);

const grid = document.querySelector('.grid');

const timer = document.querySelector('.timer');

const personagens = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',

];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;

}

let firstCard = '';
let secondCard = ''; 

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    console.log(disabledCards);

    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        window.location = '../pages/youwin.html';
    }
}

const checkCards = () => {
    const primeiroPersonagem = firstCard.getAttribute('data-personagem');
    const segundoPersonagem = secondCard.getAttribute('data-personagem');

    if (primeiroPersonagem == segundoPersonagem) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();


    } else {
        setTimeout(() => {
            // Remova a classe após um atraso
            firstCard.classList.remove('revelar-card');
            secondCard.classList.remove('revelar-card');

            // Redefina as variáveis após remover a classe
            firstCard = '';
            secondCard = '';
        }, 500);
    }
}

const startTime = () =>{
   this.loop = setInterval(() => {
        const tempoAtual = Number(timer.innerHTML);
        timer.innerHTML = tempoAtual +1;


    }, 1000);
}





const revelarCard = ({ target }) => {

    if (target.parentNode.className.includes('revelar-card')){ // se ja tiver virada ele bate no return e para a funcao
        return;
    }

    if (firstCard == ''){
        target.parentNode.classList.add('revelar-card');
        firstCard = target.parentNode;
    }else if (secondCard == ''){
        target.parentNode.classList.add('revelar-card');
        secondCard = target.parentNode;

        checkCards();

    }


}


const createCard = (personagem) => {
    const card = document.createElement('div');
    card.className = 'card';

    const front = document.createElement('div');
    front.className = 'face front';

    const back = document.createElement('div');
    back.className = 'face back';

    front.style.backgroundImage = `url('../img/${personagem}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelarCard);
    card.setAttribute('data-personagem', personagem)



    return card;
}

const loadGame = () =>{

    const personagensDuplicados = [ ... personagens, ... personagens ]; //pega os elementos do array de personagens e espalha

    const embaralhadas = personagensDuplicados.sort(() => Math.random() - 0.5);

    embaralhadas.forEach((personagem)=>{
        const card = createCard(personagem);
        grid.appendChild(card);
    });

}


window.onload = () => {
    startTime();
    loadGame();
}

 














