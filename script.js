function theme()
{
if (document.getElementsByTagName('body')[0].style.backgroundColor=='white')
{
document.getElementsByTagName('body')[0].style.backgroundColor='black';
document.getElementsByTagName('body')[0].style.color='white';
document.getElementsByTagName('button')[0].innerHTML='Day Mode';
document.getElementsByTagName('button')[0].style.backgroundColor='white';
document.getElementsByTagName('button')[0].style.color='black';
}
else
{
document.getElementsByTagName('body')[0].style.backgroundColor='white';
document.getElementsByTagName('body')[0].style.color='black';
document.getElementsByTagName('button')[0].innerHTML='Night Mode';
document.getElementsByTagName('button')[0].style.backgroundColor='black';
document.getElementsByTagName('button')[0].style.color='white';
}
}
