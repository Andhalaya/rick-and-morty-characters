
const characterList = document.getElementById('character-list');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');
let currentPage = 1;
    
function mostrarPersonajesPagina (page) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => response.json())
    .then(data => {
        const personajes = data.results;
        mostrarPersonajes(personajes);
    })
    .catch(error => console.error('Error fetching data:', error));
}
    
function mostrarPersonajes(personajes) {
    characterList.innerHTML = ''; 
    personajes.forEach(personaje => {
    let card = `
    <div class = "card">
        <img src = "${personaje.image}" alt = "${personaje.name}" />
        <div class = 'card-info'>
            <p><span>Name:</span> ${personaje.name}</p>
            <p><span>Species:</span> ${personaje.species}</p>
        </div>
    </div>`;

     characterList.innerHTML += card
  });
}
    
mostrarPersonajesPagina(currentPage);

/* <----Botones--->*/
   
prevBtn.addEventListener('click', function () {
    if (currentPage > 1) {
    currentPage--;
    mostrarPersonajesPagina(currentPage);}
 });

nextBtn.addEventListener('click', function () {
    currentPage++;
    mostrarPersonajesPagina(currentPage);
});
