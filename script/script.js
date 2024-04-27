function theme()
	{
	if(document.getElementsByTagName('body')[0].style.color=='black')
		{
		document.getElementsByTagName('body')[0].style.backgroundColor='black';
		document.getElementsByTagName('body')[0].style.color='white';
		document.getElementsByTagName('button')[0].innerHTML='Day Mode';
		document.getElementsByTagName('button')[0].style.backgroundColor='white';
		document.getElementsByTagName('button')[0].style.color='black';
		for(i=0;i<2;i++)
			{
			document.getElementsByTagName('a')[i].style.color='white';
			document.getElementsByTagName('a')[i].style.borderColor='white';
			}
		for(i=0;i<6;i++)
			{
			document.getElementById('skills').children[i].style.borderColor='white';
			}
		}
	else
		{
		document.getElementsByTagName('body')[0].style.backgroundColor='white';
		document.getElementsByTagName('body')[0].style.color='black';
		document.getElementsByTagName('button')[0].innerHTML='Night Mode';
		document.getElementsByTagName('button')[0].style.backgroundColor='black';
		document.getElementsByTagName('button')[0].style.color='white';
		for(i=0;i<2;i++)
			{
			document.getElementsByTagName('a')[i].style.color='black';
			document.getElementsByTagName('a')[i].style.borderColor='black';
			}
		for(i=0;i<6;i++)
			{
			document.getElementById('skills').children[i].style.borderColor='black';
			}
		}
	}

function btn(x)
	{
	if (x.style.color=='black')
		{
		x.style.color='white';
		x.style.backgroundColor='black';
		}
	else
		{
		x.style.color='black';
		x.style.backgroundColor='white';
		}
	}

function ntb(x)
	{
	if (x.style.color=='white')
		{
		x.style.color='black';
		x.style.backgroundColor='transparent';
		}
	else
		{
		x.style.color='white';
		x.style.backgroundColor='transparent';
		}
	}
