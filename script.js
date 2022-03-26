function adicionar(num) {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + num;
}

function clearC(){
    document.getElementById("resultado").innerHTML = "";
}

function apagar() {
     var atual = document.getElementById("resultado").innerHTML;
     document.getElementById("resultado").innerHTML = atual.substring(0, atual.length-1)
}

function calcular() {
    document.getElementById("resultado").innerHTML = eval(document.getElementById("resultado").innerHTML);
}