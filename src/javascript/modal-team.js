const modal = document.querySelector('.js-team-modal');
const body = document.querySelector('body');
const closeButton = document.querySelector('.js-team-close');
const students = document.querySelector('.js-students');
const toTop = document.querySelector('#toTopBtn');

students.addEventListener('click', handleStudentsModal);

function handleStudentsModal(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  toTop.classList.add('js-hidden');
  toggleOverflow();
  closeButton.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown', handleEsc);
}

function onCloseBtnClick() {
  modal.classList.add('hidden');
  toTop.classList.remove('js-hidden');
  toggleOverflow();
}

export function toggleOverflow() {
  body.classList.toggle('overflow-off');
  document.removeEventListener('keydown', handleEsc);
}

function handleEsc(e) {
  if (e.key === 'Escape') {
    onCloseBtnClick();
  }
}
