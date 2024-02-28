// Aquí puedes escribir tu código JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Esto se ejecutará cuando el DOM esté completamente cargado
    console.log("El DOM ha sido cargado.");
    // Puedes escribir tu código aquí
});


window.onload = function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

   var titulo = document.getElementById('titulo');
    titulo.classList.add('animar');
}

