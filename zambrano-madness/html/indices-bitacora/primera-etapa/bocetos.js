const seccionDos = document.getElementById("TipoI2");
seccionDos.addEventListener('click', puntoB);

function puntoB(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Storyboards / Bocetos</h2>
    </div>
    
    <div class="bloque-bocetos">

        <div class="boceto">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Zambrano's Madness</h4>
            </div>
            <div class="bloque-imagen">
                <img src="../../img/storyboards/zambranos_madness/zm1.jpeg" alt="storyboard">
            </div>
            <div class="bloque-imagen">
                <img src="../../img/storyboards/zambranos_madness/zm2.jpeg" alt="storyboard">
            </div>
            <div class="bloque-imagen">
                <img src="../../img/storyboards/zambranos_madness/zm3.jpeg" alt="storyboard">
            </div>
        </div>

        

    </div>
    
    
    `;
}