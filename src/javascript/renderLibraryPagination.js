import Pagination from 'tui-pagination'; 
import { renderLibraryMarkup } from "./markup";

const libraryPaginationOptions = {
  totalItems: 9, 
  itemsPerPage: 9,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  usageStatistics: false,
  template: {
    page: '<button class="tui-page-btn">{{page}}</button>',
    currentPage: '<button class="tui-page-btn tui-is-selected" data-number="{{page}}">{{page}}</button>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip" >' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};

let itemsPerPage = 9;

const libraryPagination = new Pagination('library-pagination', libraryPaginationOptions);

if (window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches) {
      itemsPerPage = 4;
      libraryPagination.setItemsPerPage(4);
    }
    if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
      itemsPerPage = 8;
      libraryPagination.setItemsPerPage(8);
    }
    if (window.matchMedia("(min-width: 1024px)").matches) {
      itemsPerPage = 9;
      libraryPagination.setItemsPerPage(9);
    }

function searchMoviesForLibrary(page, library) {
  let movies = [];
  let indexElement = itemsPerPage * (page-1);
  library.filter((element, index) => {
    if ((index + 1 <= itemsPerPage * page) && (index + 1 > indexElement)) {
      movies.push(element);
    }
  })
  if (movies.length === 0) {
    libraryPagination.movePageTo(1);
    return
  }
  renderLibraryMarkup(movies);
}

function returnQueue() {
  return JSON.parse(localStorage.getItem('queue'))
};

function returnWatched() {
  return JSON.parse(localStorage.getItem('watched'))
}

export { libraryPagination, searchMoviesForLibrary, returnQueue, returnWatched };