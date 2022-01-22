const modal = document.querySelector('.js-team-modal');
const body = document.querySelector('body');
const closeButton = document.querySelector('.js-team-close');
const students = document.querySelector('.js-students');
const toTop = document.querySelector('#toTopBtn');

students.addEventListener('click', handleStudents);

function handleStudents(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  body.style.overflow = 'hidden';
  toTop.classList.add('js-hidden');

  closeButton.addEventListener('click', onCloseBtnClick);
}

function onCloseBtnClick() {
  modal.classList.add('hidden');
  body.style.overflow = 'auto';
  toTop.classList.remove('js-hidden');
}
