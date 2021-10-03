// var canvas = new fabric.Canvas('c');
// alert('hi')
// console.log(canvas)
// canvas.setBackgroundImage('http://lorempixel.com/400/400/fashion', canvas.renderAll.bind(canvas));
// $("#text").on("click", function(e) {
// text = new fabric.Text($("#text").val(), { left: 100, top: 100 });
	  // canvas.add(text);
// });
// $("#rect").on("click", function(e) {
	// e.preventDefault();
  	// rect = new fabric.Rect({
    // left: 40,
    // top: 40,
    // width: 50,
    // height: 50,      
    // fill: 'transparent',
    // stroke: 'green',
    // strokeWidth: 5,
			  // });  
  // canvas.add(rect);
// });

// $("#circ").on("click", function(e) {
	// e.preventDefault();
  	// rect = new fabric.Circle({
    // left: 40,
    // top: 40,
    // radius: 50,     
    // fill: 'transparent',
    // stroke: 'green',
    // strokeWidth: 5,
			  // });  
  // canvas.add(rect);
// });

// $("#save").on("click", function(e) {
  	// $(".save").html(canvas.toSVG());
// });
$("#rect").on("click", function(e) {
var canvas = document.getElementById('c');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
  });
 $("#circ").on("click", function(e) {//from  w w  w  . j  a va  2s  . c  o  m
var canvas = new fabric.Canvas("c");
var circle, isDown, origX, origY;
canvas.on('mouse:down', function(o){
    isDown = true;
    var pointer = canvas.getPointer(o.e);
    origX = pointer.x;
    origY = pointer.y;
    circle = new fabric.Circle({
        left: origX,
        top: origY,
        originX: 'left',
        originY: 'top',
        radius: pointer.x-origX,
        angle: 0,
        fill: '',
        stroke:'red',
        strokeWidth:3,
    });
    canvas.add(circle);
});
canvas.on('mouse:move', function(o){
    if (!isDown) return;
    var pointer = canvas.getPointer(o.e);
    var radius = Math.max(Math.abs(origY - pointer.y),Math.abs(origX - pointer.x))/2;
    if (radius > circle.strokeWidth) {
        radius -= circle.strokeWidth/2;
    }
    circle.set({ radius: radius});
    if(origX>pointer.x){
        circle.set({originX: 'right' });
    } else {
        circle.set({originX: 'left' });
    }
    if(origY>pointer.y){
        circle.set({originY: 'bottom'  });
    } else {
        circle.set({originY: 'top'  });
    }
    canvas.renderAll();
});
canvas.on('mouse:up', function(o){
  isDown = false;
});
    });