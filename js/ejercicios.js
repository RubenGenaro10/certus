
function f01() {
    var m;
    var x;
    for (var i = 0; i < 3; i++) {
        switch (i) {
            case 0: {
                m = prompt("ingrese el nombre:");
                document.getElementById("txtDato01").value = m;
                break;
            }
            case 1: {
                x = parseInt(prompt("ingrese el sueldo:"));
                document.getElementById("txtDato02").value = x;
                break;
            }
            case 2: {
                m = prompt("ingrese el N° hijos:");
                document.getElementById("txtDato03").value = m;
                break;
            }
        }
    }
    document.getElementById("respuesta").value=(m>0) ? x+(x*0.07):x;
}
function f02(){

    var m=parseInt(prompt("Ingrese un numero"));
    document.getElementById("txtDato1-2").value = m
    document.getElementById("respuesta2").value=(m>500) ? m*0.18:m;
}

function f03(){

    var m=parseInt(prompt("Ingrese un numero"));
    document.getElementById("txtDato1-3").value = m
    var multi=1;
    for(var i=1;i<=m;i++)
    {
        multi=multi*i;
    }

    document.getElementById("respuesta3").value=multi;
}