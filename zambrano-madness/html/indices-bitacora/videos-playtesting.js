function portafolio(tipo) {
    var info = document.getElementById("Info");
    var presentacion = document.getElementById("Presentacion");
    var videos = document.getElementById("Videos");
    var gantt = document.getElementById("Gantt");
    
    if(tipo === 'I'){
        // reglas.style.display = "none";
        info.style.display = "block";
        videos.style.display = "none";
        gantt.style.display = "none";
        presentacion.style.display = "none";
    }else if(tipo === 'V'){
        // reglas.style.display = "none";
        info.style.display = "none";
        videos.style.display = "block";
        gantt.style.display = "none";
        presentacion.style.display = "none";
    }else if(tipo === 'P'){
        // reglas.style.display = "none";
        info.style.display = "none";
        videos.style.display = "none";
        gantt.style.display = "none";
        presentacion.style.display = "block";
    }else if(tipo === 'DG'){
        // reglas.style.display = "none";
        info.style.display = "none";
        videos.style.display = "none";
        gantt.style.display = "block";
        presentacion.style.display = "none";
    }
}

$('.playtesting-one-p1').magnificPopup({
    items: {
        src: `
        <div class="fx-display popup-background">
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/9929WfvgAXM"
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
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/c6qX4qXKHiY"
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
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/gtMpsSob3ko"
            title="Tutorial - Crear Tablero" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        `,
        type: 'inline'
    }
});

$('.playtesting-quatre-p1').magnificPopup({
    items: {
        src: `
        <div class="fx-display popup-background">
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/x9ebTAnbpzA"
            title="Tutorial - Crear Tablero" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        `,
        type: 'inline'
    }
});

$('.playtesting-quatre-p2').magnificPopup({
    items: {
        src: `
        <div class="fx-display popup-background">
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/1s8umMiM2QA"
            title="Tutorial - Crear Tablero" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        `,
        type: 'inline'
    }
});