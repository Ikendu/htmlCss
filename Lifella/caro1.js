// Get the carousel and items elements
const carousel = document.querySelector('.slider');
const carouselItems = document.querySelector('.slider-inner');

// Variables to track the drag state
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;

// Event listeners for mouse/touch events
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);

carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('touchend', dragEnd);

carousel.addEventListener('mousemove', drag);
carousel.addEventListener('touchmove', drag);

// Functions for drag events
function dragStart(event) {
  event.preventDefault();

  if (event.type === 'touchstart') {
    startPosition = event.touches[0].clientX;
  } else {
    startPosition = event.clientX;
  }

  isDragging = true;
}

function drag(event) {
  event.preventDefault();

  if (isDragging) {
    let currentPosition = 0;
    if (event.type === 'touchmove') {
      currentPosition = event.touches[0].clientX;
    } else {
      currentPosition = event.clientX;
    }

    currentTranslate = previousTranslate + currentPosition - startPosition;
  }
}

function dragEnd(event) {
  event.preventDefault();

  isDragging = false;

  // Update the previousTranslate value
  previousTranslate = currentTranslate;
}

// Update the carousel position on each frame
function updateCarouselPosition() {
  carouselItems.style.transform = `translateX(${currentTranslate}px)`;

  requestAnimationFrame(updateCarouselPosition);
}

// Start updating the carousel position
updateCarouselPosition();
