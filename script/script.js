function theme()
{
if (document.getElementsByTagName('body')[0].style.backgroundColor=='white')
{
document.getElementsByTagName('body')[0].style.backgroundColor='black';
document.getElementsByTagName('body')[0].style.color='white';
document.getElementsByTagName('button')[0].innerHTML='Day Mode';
document.getElementsByTagName('button')[0].style.backgroundColor='white';
document.getElementsByTagName('button')[0].style.color='black';
document.getElementById('main').style.backgroundImage='url("res/nightmode.jpg")';
document.getElementById('submain').style.backgroundColor='rgba(0,0,0,0.5)';
document.getElementById('super').style.backgroundColor='rgba(0,0,0,0.5)';
document.getElementById('ult').style.backgroundImage='url("res/night.jpg")';
for(i=0;i<3;i++)
{
document.getElementsByTagName('a')[i].style.backgroundColor='black';
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
document.getElementById('main').style.backgroundImage='url("res/daymode.jpg")';
document.getElementById('submain').style.backgroundColor='rgba(255,255,255,0.5)';
document.getElementById('super').style.backgroundColor='rgba(255,255,255,0.5)';
document.getElementById('ult').style.backgroundImage='url("res/day.jpg")';
for(i=0;i<3;i++)
{
document.getElementsByTagName('a')[i].style.backgroundColor='white';
document.getElementsByTagName('a')[i].style.color='black';
document.getElementsByTagName('a')[i].style.borderColor='black';
}
}
}
