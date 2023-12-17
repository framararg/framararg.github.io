document.addEventListener('DOMContentLoaded', function() {
    var libros = [
        'Nacidos de la bruma. El imperio final',
        'Reina Roja',
        'El codigo da vinci',
        'Dispara, yo ya estoy muerto',
        'Los pilares de la Tierra',
        'El señor de los anillos. La comunidad del anillo'
    ];

    var inputTitulo = document.getElementById('titulo-libro');
    var listaTitulos = document.getElementById('lista-titulos');

    inputTitulo.addEventListener('input', function() {
        var valorBuscado = this.value.toLowerCase();
        listaTitulos.innerHTML = '';

        if (valorBuscado) {
            libros.forEach(function(libro) {
                if (libro.toLowerCase().includes(valorBuscado)) {
                    var elementoLista = document.createElement('li');
                    elementoLista.textContent = libro;
                    listaTitulos.appendChild(elementoLista);
                }
            });
            
            listaTitulos.style.display = libros.some(libro => libro.toLowerCase().includes(valorBuscado)) ? 'block' : 'none';
        } else {
            listaTitulos.style.display = 'none';
        }
    });

    listaTitulos.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            inputTitulo.value = e.target.textContent;
            listaTitulos.style.display = 'none';
        }
    });

    var infoIcons = document.querySelectorAll('.info-icon');

    infoIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            var preview = this.nextElementSibling;
            var isVisible = preview.style.display === 'block';
            preview.style.display = isVisible ? 'none' : 'block';
        });
    });
    
});


