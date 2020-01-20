function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  //Select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('Opening modal...');
    //First check if modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already open');
      return; // Stop Func running
    }
    modal.classList.add('open');

    // Event listenings to be bound when we open modal;
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') closeModal();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling);
  }
  function showPrevImage() {
    showImage(currentImage.previousElementSibling);
  }

  function showImage(el) {
    if (!el) {
      console.info('No image to show');
      return;
    }
    // Update modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }
  // These are the event listeners
  images.forEach(image =>
    image.addEventListener('click', e => showImage(e.currentTarget))
  );
  modal.addEventListener('click', handleClickOutside);
}

// use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
