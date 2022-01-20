const modal = document.querySelector('#js-team-modal');
const body = document.querySelector('body');

console.log(modal);

function showTeamModal() {
  //   modal.classList.toggle('hidden');

  if (!modal.classList.contains('hidden')) {
    body.style.overflow = 'hidden';
    // body.style.overflow = 'auto';
  } else {
    body.style.overflow = 'auto';
    // body.style.overflow = 'hidden';
  }
}
