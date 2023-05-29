 $(document).ready(function() {
    // Select the carousel container
    var container = $('.carousel-inner');

    // Initialize variables for tracking dragging state
    var isDragging = false;
    var startPosition = 0;
    var currentTranslate = 0;
  
    // Add event listeners for touch/mouse events
    container.on('mousedown touchstart', function(e) {
      isDragging = true;
      startPosition = getPositionX(e);
      currentTranslate = 0;
    });
  
    container.on('mousemove touchmove', function(e) {
      if (!isDragging) return;
      var currentPosition = getPositionX(e);
      var diff = currentPosition - startPosition;
      currentTranslate = diff;
      container.css('transform', 'translateX( + currentTranslate + 'px')');
    });
  
    container.on('mouseup touchend', function() {
      isDragging = false;
      container.css('transform', 'translateX(0)');
    });
  
    // Helper function to get the horizontal position
    function getPositionX(event) {
      return event.type.includes('mouse') ? event.pageX : event.originalEvent.touches[0].clientX;
    }
  });