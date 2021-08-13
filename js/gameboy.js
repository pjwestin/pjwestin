window.onload = function() {
var slides = document.querySelectorAll('.slide');
for (var i=0, im=slides.length; im>i; i++) {
  var style = window.getComputedStyle(slides[i], false); var bg = style.backgroundImage.slice(5, -2);
  var img = new Image();
  img.src = bg;
  var scale = ((img.naturalWidth / img.naturalHeight) * 100) + 'vh';
  slides[i].style.minWidth = scale;
}
}