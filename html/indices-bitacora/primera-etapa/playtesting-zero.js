const seccionSeis = document.getElementById("TipoI6");
seccionSeis.addEventListener('click', puntoF);

function puntoF(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">PlayTesting Zero</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            <h3 class="text-white title-bg iguana-title">Elementos</h3>
            <div></div>
            <br>
            <h3 class="text-white title-bg iguana-title">Problemas Encontrados</h3>
            <div></div>
            <br>
            <h3 class="text-white title-bg iguana-title">Retroalimentación y Cambios</h3>
            <div></div>
        </div>
    </section>    
    `;
}