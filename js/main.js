// Crear un formulario de películas
// Título
// Descripción
// Año
// Genero
// Actores y Directores
// Cover / Imagen (link a la imagen)
// Renderizar en el DOM a medida que se apreta "Submit"

// Creando la UL a dónde se mostrarán las películas
var sectionFilms = document.getElementById("movie-container");
// Agregar film como LI
function addFilm() {
  sectionFilms.innerHTML += createMovieStructure();
}

//Crear OBJETO Película mediante una función, tomando los valores del DOM.
function createFilm() {
    return {
        title: document.getElementById('name').value,
        desc: document.getElementById('description').value,
        year: document.getElementById('year').value,
        genre: document.getElementById('genre').value,
        photo: document.getElementById('picture').value
    };
};

function createMovieStructure(){
  var movie = createFilm();
  return '<div class="col-sm-6 col-md-4">\
              <div class="thumbnail">\
                <img src="' + movie.photo + '" alt="...">\
                <div class="caption">\
                  <h3>' + movie.title + '</h3>\
                  <p> Descipción: ' + movie.desc + '</p>\
                  <p> Año: ' + movie.year + '</p>\
                  <p> Género: ' + movie.genre + '</p>\
                  <p>\
                    <a name="remove" href="#" class="btn btn-danger" role="button">Remove</a>\
                  </p>\
                </div>\
              </div>\
            </div>'
}

// Creo el evento para el Botón y que haga un push al Array de films
var btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', function(){
  addFilm();

  // Obteniendo el botón Eliminar para su función específica.
  var btnRem = document.getElementsByClassName('btn-danger');
    if (btnRem) {
      btnRem.addEventListener('click', function(event){
        console.log(this);
      }, false);
    }
}, false);
