import apiService from "./APIservise";  //Імпорт класу APIservise
const searchForm = document.querySelector('.main-form_js');
const header = document.querySelector('header');


const movieApiService = new apiService();// Новий екземпляр класу

getPopularMovies(); // Завантажує популярні фільми, при відкритті сайту

searchForm.addEventListener('submit', getMovies);



async function getMovies(e) { 
  e.preventDefault();
 
  const searchValue = e.currentTarget.elements.query.value.trim();
  movieApiService.query = searchValue;

  if (searchValue === '') {//якщо натиснули "пошук" з пустим інпутом
    header.insertAdjacentHTML("beforeend", `<p class="error-message_js">Please, enter movie name</p>`);
    setTimeout(removeErrorMessage, 2000);
    return
  }
  
    try {
      const movies = await movieApiService.fetchSearchMovies(); //Зверення до масиву об'єктів: "movies.results"

      if (movies.results.length === 0) { //якщо прийшов пустий масив або був введений некоректний запит
        header.insertAdjacentHTML("beforeend", `<p class="error-message_js">Search result not successful. Enter the correct movie name</p>`);
        setTimeout(removeErrorMessage, 2000);
        return
      };

      addMoviesCollection(movies);

  } catch (error) { };

};



async function getPopularMovies() { 
  localStorage.removeItem("genres"); // Видаляє список жанрів при першому завантаженні із localstorage, ключ 'genres'; 
    try {
      const movies = await movieApiService.fetchPopularMovies();
      const genres = await movieApiService.fetchGenres(); 

      localStorage.setItem("genres", JSON.stringify(genres));// Додає список жанрів при першому завантаженні до localstorage
      addMoviesCollection(movies);
      //Зверення до масиву об'єктів: "movies.results"

  } catch (error) { };
  
};


function removeErrorMessage() { // Очищає поле вводу та прибирає error message
  const error = document.querySelector('.error-message_js')
  searchForm.reset();
  error.remove();
};


//Додає колекцію фільмів до local Storage, ключ: 'MoviesCollection'.
function addMoviesCollection(moviesArray) { 
  localStorage.removeItem("MoviesCollection");
  localStorage.setItem("MoviesCollection", JSON.stringify(moviesArray));
};