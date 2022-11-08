function elevar(){
    numero = document.getElementById("numero").value;
    potencia =  document.getElementById("potencia").value;

    i=0;

    for(i; i<=potencia; i++){
        result = numero * numero ;
    }

    resultado = document.getElementById("resultado");
    resultado.innerHTML = "El resultado es: " +result;  
    
    //"El resultado es: " + result;

    console.log(result);

    
}
