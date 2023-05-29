$(function() {
  $("#inner-caro").draggable({
    axis: "x", // Allow horizontal dragging only
    cursor: "grab", // Set the cursor style
    start: function(event, ui) {
      // Disable vertical scrolling when dragging starts
      $(this).css("overflow-y", "hidden");
    },
    stop: function(event, ui) {
      // Enable vertical scrolling when dragging stops
      $(this).css("overflow-y", "scroll");
    }
  });
});
