document.addEventListener('DOMContentLoaded', function() {
 
  var svg = new Walkway({
    selector: '#boxes',
    duration: '25000',
    easing: 'linear'
  });
 
  svg.draw();
  
});


