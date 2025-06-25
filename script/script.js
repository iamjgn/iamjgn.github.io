const textElement = document.getElementById('jgn');
textElement.style.display = 'inline-block';
textElement.style.transformStyle = 'preserve-3d';
let angle = 0;
function rotateText() 
{
	angle += 1;
	if (angle >= 360) 
	{
		angle = 0;
	}
	textElement.style.transform = `rotateY(${angle}deg)`;
	requestAnimationFrame(rotateText);
}
rotateText();
