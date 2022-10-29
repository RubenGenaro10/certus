function f01() {
    var m = prompt("Hola");
    document.getElementById("lbl01").value = m;
    console.log(m);
}
function f02() {
    var m = prompt("Ingrese un numero: ", "0");
    l = m.length;
    var sub = m.substring(1, 3);

    var numero = m * 2;
    document.getElementById("lbl01").value = numero;
    console.log(numero);
}
function f03() {
    var m = prompt("Ingrese un numero: ", "0");
    //ver si m es positivo o negativo o cero
    if (m > 0) {
        document.getElementById("lbl01").value = "Positivo";
    } else if (m < 0) {
        document.getElementById("lbl01").value = "Negativo";
    } else {
        document.getElementById("lbl01").value = "Cero";
    }
}

function f03PRO() {
    var m = prompt("Ingrese un numero: ", "0");
    //ver si m es positivo o negativo o cero
    document.getElementById("lbl01").value = (m > 0) ? "Positivo" : (m < 0) ? "Negativo" : "Cero";
}

function f04() {
    var m = prompt("Ingrese un numero: ", "0");
    // ver si m es par o impar
    if (m % 2 == 0) {
        document.getElementById("lbl01").value = "Par";
    } else {
        document.getElementById("lbl01").value = "Impar";
    }
}

function f06() {
    //asignar sueldo del trabajador segun su categoria
    var m = prompt("Ingrese su categoria: ", "A,B,C o D");
    // para A 1000, B 800, C 600, D 400
    if (m == "A") {
        document.getElementById("lbl01").value = "Su sueldo es: 1000";
    } else if (m == "B") {
        document.getElementById("lbl01").value = "Su sueldo es: 800";
    } else if (m == "C") {
        document.getElementById("lbl01").value = "Su sueldo es: 600";
    } else if (m == "D") {
        document.getElementById("lbl01").value = "Su sueldo es: 400";
    }
}

function f07() {
    //asignar sueldo del trabajador segun su categoria
    var m = prompt("Ingrese su categoria: ", "A,B,C o D");
    // para A 1000, B 800, C 600, D 400
    switch (m) {
        case "A": document.getElementById("lbl01").value = "Su sueldo es: 1000"; break;
        case "B": document.getElementById("lbl01").value = "Su sueldo es: 800"; break;
        case "C": document.getElementById("lbl01").value = "Su sueldo es: 600"; break;
        case "D": document.getElementById("lbl01").value = "Su sueldo es: 400"; break;
        default: document.getElementById("lbl01").value = "Categoria no valida"; break;
    }
}


function f08() {
    var i = 3;
    var j = ++i;
    var k = i;
    console.log("valor j: " + j);
    console.log("valor k: " + k);

    for (var i = 1; i <= 10; ++i) {
        console.log("valor: " + i);
    }
}
function f09() {
    for (var i = 1, j = 5; i < j; ++i, --j) {
        console.log("valor i: " + i);
        console.log("valor j: " + j);
    }
}

function f10() {
    var i = 1;
    for (; ;) {
        console.log("valor i: " + i);
        i++;
        if (i > 10) break;
    }
}

function f11() {
    var i = 1;
    while (i <= 10) {
        console.log("valor i: " + i);
        i++;
    }
}


function ejercicio1() {
    var m = prompt("Ingrese un numero: ", "0");
    //ver si m es positivo o negativo o cero
    document.getElementById("lbl01").value = (m >= 150) ? m * 0.12 : m;
}

function ejercicio2() {

    var suma = 0;
    for (var i = 0; i < 3; i++) {
        var m = parseInt(prompt("Ingrese notas , pacial, final ,practicas: ", "0"));
        var prom=0;
        switch(i){
            case 0: prom=m/4;break;
            case 1: prom=m/2;break;
            case 2: prom=m/4;break;
        }
        suma=suma+prom;
    }
    document.getElementById("lbl02").value=suma;
}