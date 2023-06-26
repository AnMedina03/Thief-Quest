const seccionDos = document.getElementById("TipoI2");
seccionDos.addEventListener('click', puntoB);

function puntoB(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Storyboards</h2>
    </div>
    
    <div class="bloque-bocetos">

        <div class="boceto">
        
        </div>

    </div>
    
    
    `;
}