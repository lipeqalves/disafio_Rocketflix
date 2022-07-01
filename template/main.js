const texto = document.querySelector("#recebeTexto");
const titulo = document.querySelector("#recebeTitulo");
const buscaFilme = document.querySelector("#bnt");
const img = document.createElement("img");
const imgFilmeGet = document.querySelector("#imgFilme");

buscaFilme.addEventListener("click",function(e){
  e.preventDefault();
    const BASE_URL = `https://api.themoviedb.org/3/movie/${getRandom()}?api_key=dc30173d06685a02c86af9c34194011c`;
    getMoves(BASE_URL);
});
function getMoves(URL){
  axios.get(URL)
  .then(response => {
      texto.textContent = response.data.overview;
      titulo.textContent = response.data.title;
      img.src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
      img.style.width = "100%";
      //img.style.height = "50hv";
      imgFilmeGet.appendChild(img);
  })
  .catch(error => console.log(error), console.log(getRandom()))
}
function getRandom() {
  return Math.floor(Math.random() * 990)
}