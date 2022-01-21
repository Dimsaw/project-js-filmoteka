const preloader = document.querySelector('.preloader');

 function togglePreloader() { 
    preloader.classList.toggle('preloader-off');
    preloader.classList.toggle('preloader-on');
}

export {togglePreloader}