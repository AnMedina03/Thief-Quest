const seccionSiete = document.getElementById("TipoI7");
seccionSiete.addEventListener('click', puntoAII);

function puntoAII(){
    const regionContenido = document.getElementById("JavascriptFile");

    videoFormato = (url) => `
        <iframe class="video-reunion" src="${url}" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share" allowfullscreen>
        </iframe>
    `

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
            <br>
            <h4 class="text-white subtitle-bg iguana-title">Reunión en Equipo [3]</h4>
            <div class="fx-display fx-fil gp-1 fx-wp linea" style="padding: 1rem;">

                ${videoFormato("https://www.youtube.com/embed/UEm6jplkR_c")}

            </div>
            <br>
        </div>
    </section>
    
    
    `;
}
