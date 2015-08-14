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


// animate on scroll

$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();
  
  // effect - No1
  if(windowScrollTop>700){
    $('.section_title').css('color','yellow');
     }else{
    $('.banner h2').css('color','black');
   
  }
  
  // effect - No2
  var firstAnimation = function(){
    $('.clients .clients-info').each(
       function(){ 
         $(this).delay(500).animate(
           {opacity:1,height:'180',width:'250'},2000);}
     	);
  };
  
  // effect - No3
  var secondAnimation = function(){			
    $('.method:eq(0)').delay(1000).animate({opacity:1},'slow', function(){
  		$(this).find('h4').css('background-color','#B5C3D5');
  	});
    $('.method:eq(1)').delay(2000).animate({opacity:1},'slow', function(){
    	$(this).find('h4').css('background-color','#B5C3D5');
    });
    $('.method:eq(2)').delay(3000).animate({opacity:1},'slow', function(){
    	$(this).find('h4').css('background-color','#B5C3D5');
    });
    $('.method:eq(3)').delay(4000).animate({opacity:1},'slow', function(){
    	$(this).find('h4').css('background-color','#B5C3D5');
    });
  };
  
  // effect - No4
  var thirdAnimation = function(){
    $('.blogs').find('p').delay(1400).animate({opacity:1, left:0},'slow'); 
    $('.blogs').find('img').delay(2000).animate({opacity:1, right:0},'slow');
    $('.blogs').find('button').delay(2500).animate({opacity:1, bottom:0},'slow');  
  };

  
  if(windowWidth>549){
    if(windowScrollTop>300){
      $('.clients').css('background','tomato');
  		firstAnimation();
  	}
    if(windowScrollTop>1750){
      $('.process').css('background','tomato');
       secondAnimation();
    }
    if(windowScrollTop>3500){
      $('.blogs').css('background','tomato');
      thirdAnimation();
    }
  }else if(windowWidth>549 && windowWidth<=991){
    if(windowScrollTop>480){
       $('.clients').css('background','tomato');
  		firstAnimation();
  	}if(windowScrollTop>1150){
       $('.process').css('background','tomato');
       secondAnimation();
    }if(windowScrollTop>2200){
       $('.blogs').css('background','tomato');
       thirdAnimation();
    }  
  }else{
     if(windowScrollTop>450){
       $('.clients').css('background','tomato');
  		firstAnimation();
  	}if(windowScrollTop>850){
       $('.process').css('background','tomato');
       secondAnimation();
    }
    if(windowScrollTop>1600){
       $('.blogs').css('background','tomato');
       thirdAnimation();
    }
  }
});
