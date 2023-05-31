const object = document.getElementById('object');
let isDragging = false;
let startPosition = null;
let offset = 0;

object.addEventListener('mousedown', startDragging);
object.addEventListener('mouseup', stopDragging);
object.addEventListener('mousemove', dragObject);

function startDragging(event) {
  isDragging = true;
  startPosition = event.clientX;
  offset = object.getBoundingClientRect().right - startPosition;
  object.classList.add('dragging');
}

function stopDragging() {
  isDragging = false;
  object.classList.remove('dragging');
}

function dragObject(event) {
  if (isDragging) {
    const currentPosition = event.clientX;
    const distance = currentPosition - startPosition;
    const newPosition = distance + offset;

    object.style.right = `calc(100% - ${newPosition}px)`;
  }
}
