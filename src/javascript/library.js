// import images from '..';

const header = document.querySelector('header');
const home = document.querySelector('.page-home');
const library = document.querySelector('.page-library');
const input = document.querySelector('.search-form');
const buttons = document.querySelector('.buttons');

library.addEventListener('click', onAddLibraryPage);
home.addEventListener('click', onAddHomePage);

function onAddLibraryPage(event) {
  event.preventDefault();
  header.classList.add('library');
  header.classList.remove('home');
  home.classList.remove('nav__link--current');
  library.classList.add('nav__link--current');
  input.innerHTML = '';
  buttons.innerHTML = `<button type="button">Watched</button>
  <button type="button">queue</button>`;
}

function onAddHomePage(event) {
  event.preventDefault();
  header.classList.add('home');
  header.classList.remove('library');
  library.classList.remove('nav__link--current');
  home.classList.add('nav__link--current');
  buttons.innerHTML = '';
  input.innerHTML = `  <form class="main-form_js">
    <input type="text" name="query" id="search" autocomplete="off" placeholder="Searching movie" class="search-form__input">
    <button type="submit" class="search-form__btn">
      <svg width="12" height="12" class="search-form__icon">
    </svg>
  </button>
  </form>`;
}
