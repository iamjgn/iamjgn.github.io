function theme()
{
if(document.getElementsByTagName('body')[0].style.color=='black')
{
document.getElementsByTagName('body')[0].style.backgroundColor='black';
document.getElementsByTagName('body')[0].style.color='white';	
document.getElementById('theme').style.color='black';
document.getElementById('theme').style.backgroundColor='white';
document.getElementById('theme').innerHTML='Day Mode';
for(i=0;i<2;i++)
{
document.getElementsByClassName('elink')[i].style.color='white';
document.getElementsByClassName('elink')[i].style.backgroundColor='black';
}
for(i=0;i<8;i++)
{
document.getElementById('skill').children[i].style.boxShadow='5px 0px 0px 0px rgba(255,255,255,1)';
}
for(i=0;i<2;i++)
{
document.getElementsByClassName('plink')[i].style.color='white';
document.getElementsByClassName('plink')[i].style.backgroundColor='black';
}
for(i=0;i<3;i++)
{
document.getElementsByClassName('slink')[i].style.color='white';
document.getElementsByClassName('slink')[i].style.backgroundColor='black';
}
}
else
{
document.getElementsByTagName('body')[0].style.backgroundColor='white';
document.getElementsByTagName('body')[0].style.color='black';
document.getElementById('theme').style.color='white';
document.getElementById('theme').style.backgroundColor='black';
document.getElementById('theme').innerHTML='Night Mode';
for(i=0;i<2;i++)
{
document.getElementsByClassName('elink')[i].style.color='black';
document.getElementsByClassName('elink')[i].style.backgroundColor='white';
}
for(i=0;i<8;i++)
{
document.getElementById('skill').children[i].style.boxShadow='5px 0px 0px 0px rgba(0,0,0,1)';
}
for(i=0;i<2;i++)
{
document.getElementsByClassName('plink')[i].style.color='black';
document.getElementsByClassName('plink')[i].style.backgroundColor='white';
}
for(i=0;i<3;i++)
{
document.getElementsByClassName('slink')[i].style.color='black';
document.getElementsByClassName('slink')[i].style.backgroundColor='white';
}
}
}

function btn(x)
{
if(x.style.color=='black')
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
if(x.style.color=='black')
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
