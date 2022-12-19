const add1 = document.querySelector('.add1');
const remove1 = document.querySelector('.remove1');
const add2 = document.querySelector('.add2');
const remove2 = document.querySelector('.remove2');
const numero1 = document.querySelector('.number1');
const numero2 = document.querySelector('.number2');

let contador = 1;


add1.addEventListener('click', function () {
    contador++;
    numero1.textContent = contador;
});

remove1.addEventListener('click', function () {

    if (numero1.textContent < 2) {
        alert('Numero não pode ser menor que 1');
    } else {
        contador--;
        numero1.textContent = contador;
    }
});

add2.addEventListener('click', function () {
    contador++;
    numero2.textContent = contador;
});

remove2.addEventListener('click', function () {

    if (numero2.textContent < 2) {
        alert('Numero não pode ser menor que 1');
    } else {
        contador--;
        numero2.textContent = contador;
    }
});