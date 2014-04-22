function draw(el){
		//var core = document.getElementById("Core")
		var canvas = document.getElementById("pcBuilder");
		var ctx = canvas.getContext("2d");
		var rel = el.getAttribute('rel');
		var img = new Image();
		var img2 = new Image();	
		
		if (rel == "Core") {
			ctx.clearRect(0,0,canvas.width,canvas.height);
			img.addEventListener("load", function(){ctx.drawImage(img,0,0)});
			img.src="images/Chassis/Thermaltake/CoreV71/Angled.png";
			
			img2.addEventListener("load",function(){ctx.drawImage(img2, 200,0)});
			img2.src="images/Chassis/Thermaltake/CoreV71/Back.png";
			}
		
		if (rel == "Antec"){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			img.addEventListener("load", function(){ctx.drawImage(img,0,0)});
			img.src="images/Chassis/Antec/arch.png";
			}
}
draw();

/*var canvas = document.getElementById("pcBuilder");
var ctx = canvas.getContext("2d");

var coreAngledImg = new Image();  // this is a better way to create the image
coreAngledImg.src = "images/Chassis/Thermaltake/CoreV71/back.png";
coreAngledImg.onload = function(){ctx.drawImage(coreAngledImg,0,0);};	 

var coreBackImg = new Image();
coreBackImg.src = "images/Chassis/Thermaltake/CoreV71/Back.png";
coreBackImg.onload = function(){ctx.drawImage(coreBackImg,200,0);};

function draw(imgId,x,y){
ctx.drawImage(imgId,x,y);
}

draw();*/
