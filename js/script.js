

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function erase(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        resultado = String(eval(resultado)).slice(0, 14)
        document.getElementById('resultado').innerHTML = Number(resultado)
    } 
    else 
    {
        document.getElementById('resultado').innerHTML = "Error"
    }
}