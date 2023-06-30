const seccionTres = document.getElementById("TipoI3");
seccionTres.addEventListener('click', puntoC);

function puntoC(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Elementos Formales</h2>
    </div>
    
    <div class="bloque-ef">

        <div class="elemento-formal">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Guillermo Veintimilla</h4>
            </div>
            <div class="bloque-imagen-ef">
                <img src="../img/elementos-formales/EFormal-GV.jpg" alt="elemento_formal">
            </div>
        </div>

        <div class="elemento-formal">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Andres Medina</h4>
            </div>
            <div class="bloque-imagen-ef">
                <img src="../img/elementos-formales/EFormal-AM.jpg" alt="elemento_formal">
            </div>
        </div>

        <div class="elemento-formal">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Diego Arteaga</h4>
            </div>
            <div class="bloque-imagen-ef">
                <img src="../img/elementos-formales/EFormal-DA.jpg" alt="elemento_formal">
            </div>
        </div>

        <div class="elemento-formal">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Diego Reyes</h4>
            </div>
            <div class="bloque-imagen-ef">
                <img src="../img/elementos-formales/EFormal-DR.jpg" alt="elemento_formal">
            </div>
        </div>

    </div>
    
    
    
    
    
    
    
    `;
}