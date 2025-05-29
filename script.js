function getNumeros() {
    const num1 = parseFloat(document.getElementById('txtnumero1').value) || 0;
    const num2 = parseFloat(document.getElementById('txtnumero2').value) || 0;
    return [num1, num2];
}

function sumar() {
    const [num1, num2] = getNumeros();
    document.getElementById('resultado').value = num1 + num2;
}

function restar() {
    const [num1, num2] = getNumeros();
    document.getElementById('resultado').value = num1 - num2;
}

function multiplicar() {
    const [num1, num2] = getNumeros();
    document.getElementById('resultado').value = num1 * num2;
}

function dividir() {
    const [num1, num2] = getNumeros();
        document.getElementById('resultado').value = num1 / num2;
    }