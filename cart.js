function cart(x){
	var cartArray = new Array(8);
	var chassis;
	var motherboard;
	var processor;
	var ram;
	var graphics;
	var hardD;
	var optical;
	var powerS;
	//var item = document.getElementByTagName("a").getElementById('rel');
	var item=x;
	
	
	if (item == "GX700") {
			cartArray[0] = 500;
		}
	
	if (cartArray[0] == 500) {
			var canvas = document.getElementById("individual");
			var ctx = canvas.getContext("2d");
			var img = new Image();
			ctx.drawImage(img,0,0);
			img.src="images/Chassis/Antec/arch.png";
}

cart(draw());

