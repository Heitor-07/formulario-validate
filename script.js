
const formulario = document.querySelector('.form');
const inputForm = document.querySelectorAll('.inputForm');
const message = document.querySelectorAll('.message');
const mostrarSenha = document.querySelector('.mostraSenha');
const senha = document.querySelector('#senha');
const Repetirsenha = document.querySelector('#repetirsenha');

/* Modal */

const modal = document.querySelector('.modal');
const fade = document.querySelector('.fade');
const closeModal = document.querySelector('.close');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarName();
    validarEmail();
    validarSenha();
    validarSenhaRepetida();

    if(validarName() && validarEmail() && validarSenha() && validarSenhaRepetida()){
        modal.classList.toggle('hideModal');
        fade.classList.toggle('hide');

        inputForm.forEach((f) => {
            f.value = '';
        })
    }    
    
})

const close = () => {
    modal.classList.toggle('hideModal');
    fade.classList.toggle('hide');
}

closeModal.addEventListener('click', close);

const messageError = (index) => {
    message[index].style.display = 'block'; 
}

const removerError = (index) => {
    message[index].style.display = 'none'; 
}

const removeSpace = (index) => {
    if(inputForm[index].value.indexOf(' ') >= 0){
        inputForm[index].value = inputForm[index].value.trimEnd();
    }
}

const validarName = () => {
    
    if(inputForm[0].value.length < 3){
        messageError(0);
    } else {
        removerError(0);
        return true;
    }

    removeSpace(0);
}

const validarEmail = () => {

    if(!emailRegex.test(inputForm[1].value)){
        messageError(1);
    } else {
        removerError(1);
        return true;
    }

}

const validarSenha = () => {

    if(inputForm[2].value.length < 8){
        messageError(2);
    } else {
        removerError(2);
        return true;
    }

    removeSpace(2);
}

const validarSenhaRepetida = () => {

    if(inputForm[2].value == inputForm[3].value && inputForm[3].value.length >= 8){
        removerError(3);
        return true;
    } else {
        messageError(3);
    }

    removeSpace(3);
}

const showSenha = () => {
    
    if(senha.getAttribute('type') === 'password'){
        senha.type = "text";
    } else {
        senha.type = "password";

    }

    if(Repetirsenha.getAttribute('type') === 'password'){
        Repetirsenha.type = "text";
    } else {
        Repetirsenha.type = "password";

    }

}

mostrarSenha.addEventListener('click', showSenha);