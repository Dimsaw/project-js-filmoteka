const modal = document.querySelector('#js-team-modal');
const body = document.querySelector('body');

showTeamModal();

function showTeamModal() {
  if (!modal.classList.contains('hidden')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}
