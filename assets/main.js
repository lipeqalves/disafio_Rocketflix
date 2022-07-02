const texto = document.querySelector("#recebeTexto");
const titulo = document.querySelector("#recebeTitulo");
const buscaFilme = document.querySelector("#bnt");
const img = document.createElement("img");
const imgFilmeGet = document.querySelector("#imgFilme");
const textoErro = document.querySelector("#recebeTextoErro");

buscaFilme.addEventListener("click",function (e){
  e.preventDefault();
  const idFilme = getRandom();
    const BASE_URL = `https://api.themoviedb.org/3/movie/${idFilme}?api_key=dc30173d06685a02c86af9c34194011c`;
    
    getMoves(BASE_URL);
 
});
function getMoves(URL){
  axios.get(URL)
  .then(response => {
    textoErro.textContent="";
      texto.textContent = response.data.overview;
      titulo.textContent = response.data.title;
      img.style.display = ''
      img.src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
      img.style.width = "100%";
      //img.style.height = "50hv";
      imgFilmeGet.appendChild(img);
  })
  .catch(titulo.textContent ="",
          texto.textContent ="",
          img.style.display = 'none',
          textoErro.textContent=`Error: Filme não encontrado, Vamos tentar novamente, Click em 'Encontrar filme' `)
}
function getRandom() {
  return Math.floor(Math.random() * 990)
}
