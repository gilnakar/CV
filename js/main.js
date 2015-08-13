document.addEventListener('DOMContentLoaded', function() {
 
  var svg = new Walkway({
    selector: '#boxes',
    duration: '90000',
    easing: 'linear'
  });
 
  svg.draw();
  
});


var s = Snap("#boxes");
var p =Snap("#model");

p.animate({
	stroke: "lightgreen"},9000);



p.drag();


