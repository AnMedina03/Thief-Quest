function rules(tipo) {
    var reglas = document.getElementById("reglas");
    var ladron = document.getElementById("ladron");
    var iguana = document.getElementById("iguana");

    if(tipo === 'A'){
        reglas.style.display = "block";
        ladron.style.display = "none";
        iguana.style.display = "none";
    }else if(tipo === 'L'){
        reglas.style.display = "none";
        ladron.style.display = "block";
        iguana.style.display = "none";
    }else if(tipo === 'I'){
        reglas.style.display = "none";
        ladron.style.display = "none";
        iguana.style.display = "block";
    }
}
