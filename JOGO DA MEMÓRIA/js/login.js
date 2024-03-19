console.log("login carregado");
const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');




//se o input for preenchido ele habilita senao ele desabilita 
const validateInput = ({target}) =>{
    if (target.value.length >2 ){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', '');
    }
};

//quando o usuario digitar no input vai chamar a funcao validateInput
input.addEventListener('input', validateInput);


const handleSubmit = (e) =>{
    e.preventDefault();
    
    localStorage.setItem('player', input.value); //salva o value do input na chave player no local storage
    window.location = '../pages/game.html';
}

//aciona a funcao quando o botao for clicado 
form.addEventListener('submit', handleSubmit);

















