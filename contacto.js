const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const numero = document.getElementById('numero');
const ciudad = document.getElementById('ciudad');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const numeroValue = email.value.trim();
    const ciudadValue = email.value.trim();
    if (nombreValue === '') {
        setErrorFor(nombre, 'No puede dejar el Nómbre en blánco.')
    } else {
        setSuccessFor(nombre);
    }
    if (emailValue === '') {
        setErrorFor(email, 'No puede dejar el Emaíl en blánco.');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingresó un Emaíl válido.')
    } else {
        setSuccessFor(email);
    }
    if (numeroValue === '') {
        setErrorFor(numero, 'No puede dejar el Número en blanco.');
    } else if (!isNumero(numeroValue)) {
        setErrorFor(numero, 'No ingresó un Número válido.')
    } else {
        setSuccessFor(numero);
    }
    if (ciudadValue === '') {
        setErrorFor(ciudad, 'No puede dejar la Ciudád en blánco.')
    } else {
        setSuccessFor(ciudad);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

function isNumero(numero) {
    return /^\d{7,14}$/ // 7 a 14 numeros.
}
/**const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    ciudad: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}*/