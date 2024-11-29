
function acumularOperacion(numero) {
    var pantalla = document.getElementById('pantalla');
    var operacion = document.getElementById('pantalla').value;

    operacion+=numero;
    pantalla.value = operacion;
}

function borrar() {
    var pantalla = document.getElementById('pantalla');
    pantalla.value="";
}

function acumularSuma() {
    var pantalla = document.getElementById('pantalla');
    var operacion = document.getElementById('pantalla').value;
    operacion+="+";
    pantalla.value = operacion;
}

function acumularResta() {
    var pantalla = document.getElementById('pantalla');
    var operacion = document.getElementById('pantalla').value;
    operacion+="-";
    pantalla.value = operacion;
}

function acumularMultiplicacion() {
    var pantalla = document.getElementById('pantalla');
    var operacion = document.getElementById('pantalla').value;
    operacion+="*";
    pantalla.value = operacion;
}

function acumularDivision() {
    var pantalla = document.getElementById('pantalla');
    var operacion = document.getElementById('pantalla').value;
    operacion+="/";
    pantalla.value = operacion;
}

function realizarOperacion() {
    var pantalla = document.getElementById('pantalla');
    var operacion = document.getElementById('pantalla').value;
    pantalla.value = eval(operacion);
}