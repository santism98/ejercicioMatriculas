const generos = ["Terror", "Accion", "Comedia", "Romantica"];
const selectGenero = document.getElementById("genero");

const agregarGenerosSelect = () => {
  generos.forEach(genero => {
    const option = document.createElement("option");
    option.value = genero.toLowerCase();
    option.text = genero;
    selectGenero.add(option);
  });
}

//FUNCION VALIDAR DATOS
const validarDatos = ( titulo, director, anio ) => {
  const regex = {
    titulo: /[\w]/ig,
    director: /[a-z]+[A-Z]/ig,
    anio: /^(18\d{2}|19\d{2}|20[0-2]\d|20[3-9][0-9]|21[0-9]{2})$/,
  };

  const errores = {};

  if (!regex.titulo.test({titulo})) {
    errores.titulo = 'El título debe contener al menos un carácter alfanumérico.';
  }

  if (!regex.director.test({director})) {
    errores.director = 'El nombre del director debe contener al menos una letra minúscula y una mayúscula.';
  }

  const currentYear = new Date().getFullYear();
  if (!regex.anio.test(anio) || parseInt(anio) < 1800 || parseInt(anio) > currentYear) {
    errores.anio = `El año debe estar entre 1800 y ${currentYear}.`;
  }

  return errores;
}

//METEMOS GENEROS DEL SELECT
agregarGenerosSelect();

const formulario = document.getElementById("formulario");
const tablaCuerpo = document.getElementById("tabla-cuerpo");
const peliculas = [];

//FUNCION AGREGAR PELICULA
const agregarPelicula = () => {
  const titulo = document.getElementById("titulo").value.trim();
  const director = document.getElementById("director").value.trim();
  const anio = document.getElementById("anio").value.trim();
  const genero = document.getElementById("genero").value.trim();

  // if (anio.length !== 4) {
  //   alert("El anio debe tener 4 cifras");
  //   return;
  // }
  peliculas.push({ titulo, director, anio, genero });
  formulario.reset();
}

//FUNCION PINTAR
const rellenarTabla = (pelicula) => {
  const fila = document.createElement("tr");
  const tituloTabla = document.createElement("td");
  const directorTabla = document.createElement("td");
  const anioTabla = document.createElement("td");
  const generoTabla = document.createElement("td");

  tituloTabla.textContent = pelicula.titulo;
  directorTabla.textContent = pelicula.director;
  anioTabla.textContent = pelicula.anio;
  generoTabla.textContent = pelicula.genero;

  fila.append(tituloTabla);
  fila.append(directorTabla);
  fila.append(anioTabla);
  fila.append(generoTabla);
  tablaCuerpo.append(fila);
}

//FUNCION SUBIR LOCAL

const addLocal=(pelicula)=>{
  let local = localStorage;
  local.setItem(peliculas, JSON.stringify({pelicula}));
}


//FUNCION SUBMIT (PARA QUE FUNCIONE TODO)

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  agregarPelicula();
  validarDatos();
  const ultimaPelicula = peliculas[peliculas.length - 1];
  rellenarTabla(ultimaPelicula);
  addLocal();
});





//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


