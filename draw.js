function draw(type){
		var canvas = document.getElementById("pcBuilder");
		var ctx = canvas.getContext("2d");
		var type = type.getAttribute('rel');
		var img = new Image();
		var img2 = new Image();	
		
		if (type == "Core") {
			ctx.clearRect(0,0,canvas.width,canvas.height);
			img.addEventListener("load", function(){ctx.drawImage(img,0,0)});
			img.src="images/Chassis/Thermaltake/CoreV71/Angled.png";
			
			img2.addEventListener("load",function(){ctx.drawImage(img2, 200,0)});
			img2.src="images/Chassis/Thermaltake/CoreV71/Back.png";
			}
		
		if (type == "GX700") {
			ctx.clearRect(0,0,canvas.width,canvas.height);
			img.addEventListener("load", function(){ctx.drawImage(img,0,0)});
			img.src="images/Chassis/Antec/arch.png";
			}
		
		if (type == "clear") {
			ctx.clearRect(0,0,canvas.width,canvas.height);
			}
}
draw();
