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
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Guillermo Veintimilla</h4>
            </div>
            <div class="bloque-imagen-G">
                <img src="../../img/storyboards/GV.png" alt="storyboard">
            </div>
        </div>

        <div class="boceto">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Andres Medina</h4>
            </div>
            <div class="bloque-dos-imagenes">
                <div class="bloque-imagen">
                    <img src="../../img/storyboards/AM.png" alt="storyboard">
                </div>
                <div class="bloque-imagen">
                    <img src="../../img/storyboards/AM2.png" alt="storyboard">
                </div>
            </div>
        </div>

        <div class="boceto">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Diego Arteaga</h4>
            </div>
            <div class="bloque-imagen">
                <img src="../../img/storyboards/DA.png" alt="storyboard">
            </div>
        </div>

        <div class="boceto">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Diego Reyes</h4>
            </div>
            <div class="bloque-imagen">
                <img src="../../img/storyboards/DR.png" alt="storyboard">
            </div>
        </div>

    </div>
    
    
    `;
}