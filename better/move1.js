const object = document.getElementById('object');
let direction = 1;
let intervalId;

function moveObject() {
  const currentPosition = parseInt(object.style.left) || 0;
  const containerWidth = document.documentElement.clientWidth;
  const objectWidth = object.offsetWidth;

  if (currentPosition + objectWidth >= containerWidth || currentPosition <= 0) {
    direction =- direction;
  }

  object.style.left = currentPosition + direction + 'px';
}

function startMoving() {
  intervalId = setInterval(moveObject, 5);
}

function stopMoving() {
  clearInterval(intervalId);
}

object.addEventListener('mouseover', stopMoving);
object.addEventListener('mouseout', startMoving);

let isDragging = false;
let mouseOffsetX = 0;

object.addEventListener('mousedown', function(e) {
  isDragging = true;
  mouseOffsetX = e.clientX - parseInt(object.style.left);
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    object.style.left = e.clientX - mouseOffsetX + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});

document.addEventListener('mouseleave', startMoving);

startMoving();
