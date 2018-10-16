$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").Toggle();
    $("#initially-hidden").Toggle();
  });
});
