
$('.trailer-tutorial').magnificPopup({
    items: {
        src: `
        <div class="fx-display popup-background">
            <iframe class="video-fullscreen" src="https://www.youtube.com/embed/Y5vKeyp3bYE"
            title="Tutorial - Crear Tablero" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        `,
        type: 'inline'
    }
});