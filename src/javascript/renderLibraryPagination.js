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

const libraryPagination = new Pagination('library-pagination', libraryPaginationOptions);

window.addEventListener("resize", function() {
  if (window.matchMedia("(max-width: 768px - 1)").matches) {
    console.log(libraryPaginationOptions.itemsPerPage);
    libraryPagination.setItemsPerPage(4);
    console.log(libraryPaginationOptions.itemsPerPage);
    return
  }

  if (window.matchMedia("(max-width: 1024px - 1)").matches) {
    console.log(libraryPaginationOptions.itemsPerPage);
    libraryPagination.setItemsPerPage(8);
    console.log(libraryPaginationOptions.itemsPerPage);
    return
  }

  // if (window.matchMedia("(min-width: 1024)").matches) {
    console.log(libraryPaginationOptions.itemsPerPage);
    libraryPagination.setItemsPerPage(9);
    console.log(libraryPaginationOptions.itemsPerPage);
  //   return
  // }

});

function searchMoviesForLibrary(page, library) {
  window.addEventListener("resize", function() {
    if (window.matchMedia("max-width: 767px").matches) {
      let movies = [];
      let indexElement = 4 * (page-1);
      library.filter((element, index) => {
        if ((index + 1 <= 4 * page) && (index + 1 > indexElement)) {
          movies.push(element);
        }
      })

      renderLibraryMarkup(movies);
      return
    }

    if (window.matchMedia("(max-width: 1023px)").matches) {
      let movies = [];
      let indexElement = 8 * (page-1);
      library.filter((element, index) => {
        if ((index + 1 <= 8 * page) && (index + 1 > indexElement)) {
          movies.push(element);
        }
      })

      renderLibraryMarkup(movies);
      return
    }

    // if (window.matchMedia("(min-width: 1024)").matches) {
      let movies = [];
      let indexElement = 9 * (page-1);
      library.filter((element, index) => {
        if ((index + 1 <= 9 * page) && (index + 1 > indexElement)) {
          movies.push(element);
        }
      })
      renderLibraryMarkup(movies);
      // return
    // }
});
  // let movies = [];
  // let indexElement = 9 * (page-1);
  // library.filter((element, index) => {
  //   if ((index + 1 <= 9 * page) && (index + 1 > indexElement)) {
  //     movies.push(element);
  //   }
  // })

  // renderLibraryMarkup(movies);
}

function returnQueue() {
  return JSON.parse(localStorage.getItem('queue'))
};

function returnWatched() {
  return JSON.parse(localStorage.getItem('watched'))
}

export { libraryPagination, searchMoviesForLibrary, returnQueue, returnWatched };