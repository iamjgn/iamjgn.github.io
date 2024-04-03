function theme()
{
if (document.getElementsByTagName('body')[0].style.backgroundColor=='white')
	{
	document.getElementsByTagName('body')[0].style.backgroundColor='black';
	document.getElementsByTagName('body')[0].style.color='white';
	document.getElementsByTagName('button')[0].innerHTML='Day Mode';
	document.getElementsByTagName('button')[0].style.backgroundColor='white';
	document.getElementsByTagName('button')[0].style.color='black';
	document.getElementsByTagName('body')[0].style.backgroundImage='url("res/night.jpg")';
	for(i=0;i<3;i++)
		{
		document.getElementsByTagName('a')[i].style.color='white';
		document.getElementsByTagName('a')[i].style.borderColor='white';
		}
	}
else
	{
	document.getElementsByTagName('body')[0].style.backgroundColor='white';
	document.getElementsByTagName('body')[0].style.color='black';
	document.getElementsByTagName('button')[0].innerHTML='Night Mode';
	document.getElementsByTagName('button')[0].style.backgroundColor='black';
	document.getElementsByTagName('button')[0].style.color='white';
	document.getElementsByTagName('body')[0].style.backgroundImage='url("res/day.jpg")';
	for(i=0;i<3;i++)
		{
		document.getElementsByTagName('a')[i].style.color='black';
		document.getElementsByTagName('a')[i].style.borderColor='black';
		}
	}
}
