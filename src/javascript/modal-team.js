const modal = document.querySelector('.js-team-modal');
const body = document.querySelector('body');
const closeButton = document.querySelector('.js-team-close');
const students = document.querySelector('.js-students');

students.addEventListener('click', handleStudents);

showTeamModal();

function showTeamModal() {
  if (!modal.classList.contains('hidden')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}

function handleStudents(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  closeButton.addEventListener('click', onCloseBtnClick);
}

function onCloseBtnClick() {
  modal.classList.add('hidden');
}
