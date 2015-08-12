document.addEventListener('DOMContentLoaded', function() {
 
  var svg = new Walkway({
    selector: '#boxes',
    duration: '25000',
    easing: 'linear'
  });
 
  svg.draw();
  
});


var s = Snap("#boxes");
var p =Snap("#model");

p.animate({
	stroke: "lightgreen"},5000);
p.animate({ transform: ('t300,250') }, 14000, mina.bounce );


p.drag();


