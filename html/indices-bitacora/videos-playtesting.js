function portafolio(tipo) {
    var info = document.getElementById("Info");
    var videos = document.getElementById("Videos");
    var prototipos = document.getElementById("Prototipo");
    
    if(tipo === 'I'){
        // reglas.style.display = "none";
        info.style.display = "block";
        videos.style.display = "none";
        prototipos.style.display = "none";
    }else if(tipo === 'V'){
        // reglas.style.display = "none";
        info.style.display = "none";
        videos.style.display = "block";
        prototipos.style.display = "none";
    }else if(tipo === 'P'){
        // reglas.style.display = "none";
        info.style.display = "none";
        videos.style.display = "none";
        prototipos.style.display = "block";
    }
}

$('.playtesting-one-p1').magnificPopup({
    items: {
        src: `
        <div class="fx-display popup-background">
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/sy2K6ySjdPw"
            title="Tutorial - Crear Tablero" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        `,
        type: 'inline'
    }
});

$('.playtesting-one-p2').magnificPopup({
    items: {
        src: `
        <div class="fx-display popup-background">
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/OPyU_ryJd78"
            title="Tutorial - Crear Tablero" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        `,
        type: 'inline'
    }
});

$('.playtesting-two-p1').magnificPopup({
    items: {
        src: `
        <div class="fx-display popup-background">
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/TLOrT2_zbJc"
            title="Tutorial - Crear Tablero" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        `,
        type: 'inline'
    }
});

$('.playtesting-tri-p1').magnificPopup({
    items: {
        src: `
        <div class="fx-display popup-background">
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/o-j-2g3J4Lo"
            title="Tutorial - Crear Tablero" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        `,
        type: 'inline'
    }
});

// $('.playtesting-tri-p2').magnificPopup({
//     items: {
//         src: `
//         <div class="fx-display popup-background">
//             <iframe class="video-fullscreen" src="https://www.youtube.com/embed/TLOrT2_zbJc"
//             title="Tutorial - Crear Tablero" frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen></iframe>
//         </div>
//         `,
//         type: 'inline'
//     }
// });