let pagina = 1;

let params = {
  url: "https://api.themoviedb.org/3",
  api_key: "6c9af21b3a8246271925801289f82a36",
};

let cargarPeliculas = async () => {
  try {
    let response = await fetch(
      `${params.url}/movie/popular?api_key=${params.api_key}&language=es-ES&page=${pagina}`
    );
    if (response.status === 200) {
      let data = await response.json();
      let movies = [];
      data.results.forEach((movie) => {
        movies += `
          <div class="pelicula">
              <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
              <h3 class="titulo">${movie.title}</h3>
          </div>`;
      });
      document.getElementById("contenedor").innerHTML = movies;
    } else if (respuesta.status === 401) {
      console.log("no tiene la api_key correcta");
    } else if (respuesta.status === 404) {
      console.log("Lo buscado no esta disponible");
    } else {
      console.log("error desconocido no sabemos de donde viene");
    }
  } catch (e) {
    console.log(e.message);
  }
};

let buscarPeliculas = async (term) => {
  try {
    let response = await fetch(
      `${params.url}/search/movie?api_key=${params.api_key}&language=es-ES&query=${term}&page=${pagina}&include_adult=true`
    );
    if (response.status === 200) {
      let data = await response.json();
      let movies = [];
      data.results.forEach((movie) => {
        movies += `
            <div class="pelicula">
              <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"> 
              <h3 class="titulo">${movie.title}</h3>
            </div>
          `;
      });
      document.getElementById("contenedor").innerHTML = movies;
    } else if (respuesta.status === 401) {
      console.log("no tiene la api_key correcta");
    } else if (respuesta.status === 404) {
      console.log("Lo buscado no esta disponible");
    } else {
      console.log("error desconocido no sabemos de donde viene");
    }
  } catch (err) {
    console.log(err.message);
  }
};

let buscarSeries = async (term) => {
  try {
    let response = await fetch(
      `${params.url}/search/tv?api_key=${params.api_key}&language=es-ES&query=${term}&page=${pagina}&include_adult=true`
    );
    if (response.status === 200) {
      let data = await response.json();
      let series = [];
      for (let serie of data.results) {
        series += `
            <div class="pelicula">
              <img class="poster" src="${serie.poster_path}">
              <h3 class="titulo">${serie.title}</h3>
            </div>
          `;
      }
      document.querySelector("contenedor").innerHTML = series;
    } else if (respuesta.status === 401) {
      console.log("no tiene la api_key correcta");
    } else if (respuesta.status === 404) {
      console.log("Lo buscado no esta disponible");
    } else {
      console.log("error desconocido no sabemos de donde viene");
    }
  } catch (err) {
    console.log(err.message);
  }
};

let peliculaInformacion = async () => {
  try {
    let response = await fetch(`${params.url}`);
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.info(err);
  }
};
