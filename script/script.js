const text=document.querySelector('#jgn');
let angle=0;
function rotate() 
{
angle+=1;
text.style.transform=`rotateY(${angle}deg)`;
requestAnimationFrame(rotate);
}
rotate();

document.getElementById('year').textContent=new Date().getFullYear();