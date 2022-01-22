import { genresTextArray } from './markup';

const modalCloseBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const filmsContainer = document.querySelector('.films__list');
const modalUI = document.querySelector('.modalUI');


filmsContainer.addEventListener('click', onFilmClick);
modalCloseBtn.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-hidden');
}

function onFilmClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  } else {
    toggleModal();
    modalUI.innerHTML = "";
    showFilmInfo(e);
  }
}

function showFilmInfo(e){
    const currentFilms = JSON.parse(localStorage.getItem("MoviesCollection")).results;

    
    
    currentFilms.map(item => {

        
        // console.log(genresTextArray(item.genre_ids));

        if(e.target.id === String(item.id)){
            
            modalUI.insertAdjacentHTML("afterbegin",
            `<img src="https://image.tmdb.org/t/p/w500${item.poster_path}" width="100%" height="100%" alt="" class="film-preview-img" />

            <div>
              <h1 class="h1">${item.title}</h1>
              <table class="table-info">
                <tr>
                  <td class="modal-info">Vote / Votes</td>
                  <td><span class="vote-modal">${item.vote_average}</span> / <span class="votes-modal">${item.vote_count}</span></td>
                </tr>
                <tr>
                  <td class="modal-info">Popularity</td>
                  <td>${item.popularity.toFixed(1)}</td>
                </tr>
                <tr>
                  <td class="modal-info">Original Title</td>
                  <td>${item.title.toUpperCase()}</td>
                </tr>
                <tr>
                  <td class="modal-info">Genre</td>
                  <td>${genresTextArray(item.genre_ids)}</td>
                </tr>
              </table>
      
              <span>ABOUT</span>
              <p class="modal-overview">${item.overview}</p>
              
              <ul class="buttons-list">
                <li><button type="submit" class="btn-modal">ADD TO WATCHED</button></li>
                <li><button type="submit" class="btn-modal">ADD TO QUEUE</button></li>
              </ul>
            </div>`);
        }
        
    });

    
}

// console.log()