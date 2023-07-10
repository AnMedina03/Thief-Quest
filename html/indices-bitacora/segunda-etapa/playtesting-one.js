const seccionSiete = document.getElementById("TipoI7");
seccionSiete.addEventListener('click', puntoAII);

function puntoAII(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">PlayTesting 1</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            <h3 class="text-white title-bg thief-title">Elementos</h3>
            <div></div>
            <br>
            <h3 class="text-white title-bg thief-title">Problemas Encontrados</h3>
            <div></div>
            <br>
            <h3 class="text-white title-bg thief-title">Retroalimentación y Cambios</h3>
            <div></div>
        </div>
    </section>
    
    
    `;
}
