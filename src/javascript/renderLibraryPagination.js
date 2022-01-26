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

function searchMoviesForLibrary(page, library) {
  let movies = [];
  let indexElement = 9 * (page-1);
  library.filter((element, index) => {
    if ((index + 1 <= 9 * page) && (index + 1 > indexElement)) {
      movies.push(element);
    }
  })

  renderLibraryMarkup(movies);
}

export { libraryPagination, searchMoviesForLibrary };