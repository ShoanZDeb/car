canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background.imgTag = new Image();
	background.imgTag.onload = uploadBackground;
	background.imgTag.src = background_image;
	
    greencar.imgTag = new Image();
	greencar.imgTag.onload = uploadgreencar;
	greencar.imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas_width, canvas_height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
        greencar_y = greencar_y - 10;
		console.log("When up pressed y= " + greencar_y) + "X= " + greencar_x;
    }
}

function down()
{
	if(greencar_y >=0)
	{
        greencar_y = greencar_y + 10;
		console.log("When down pressed y= " + greencar_y) + "X= " + greencar_x;
    }
}

function left()
{
	if(greencar_x >=0)
	{
        greencar_x = greencar_x - 10;
		console.log("When left pressed y= " + greencar_y) + "X= " + greencar_x;
    }
}

function right()
{
	if(greencar_x >=0)
	{
        greencar_x = greencar_x + 10;
		console.log("When right pressed y= " + greencar_y) + "X= " + greencar_x;
    }
}
