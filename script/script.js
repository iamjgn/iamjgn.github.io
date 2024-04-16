function theme()
{
if (document.getElementsByTagName('body')[0].style.color=='black')
	{
	document.getElementsByTagName('body')[0].style.backgroundColor='#0d0d0d;
	document.getElementsByTagName('body')[0].style.color='white';
	document.getElementsByTagName('button')[0].innerHTML='Day Mode';
	document.getElementsByTagName('button')[0].style.backgroundColor='white';
	document.getElementsByTagName('button')[0].style.color='black';
	for(i=0;i<3;i++)
		{
		document.getElementsByTagName('a')[i].style.color='black';
		document.getElementsByTagName('a')[i].style.backgroundColor='white';
		}
	for(i=0;i<10;i++)
		{
		document.getElementById('skills').children[i].style.borderColor='white';
		}
	}
else
	{
	document.getElementsByTagName('body')[0].style.backgroundColor='#f5f5f5';
	document.getElementsByTagName('body')[0].style.color='black';
	document.getElementsByTagName('button')[0].innerHTML='Night Mode';
	document.getElementsByTagName('button')[0].style.backgroundColor='black';
	document.getElementsByTagName('button')[0].style.color='white';
	for(i=0;i<3;i++)
		{
		document.getElementsByTagName('a')[i].style.color='white';
		document.getElementsByTagName('a')[i].style.backgroundColor='black';
		}
	for(i=0;i<10;i++)
		{
		document.getElementById('skills').children[i].style.borderColor='black';
		}
	}
}
