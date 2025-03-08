window.addEventListener('DOMContentLoaded', (event) => 
{
	const body = document.body;
	const html = document.documentElement;
	function Particle(x, y, radius, color, speedX, speedY) 
	{
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.speedX = speedX;
		this.speedY = speedY;
		this.element = document.createElement('div');
		this.element.style.position = 'absolute';
		this.element.style.borderRadius = '50%';
		this.element.style.backgroundColor = this.color;
		this.element.style.width = `${this.radius * 2}px`;
		this.element.style.height = `${this.radius * 2}px`;
		body.appendChild(this.element);
	}
	Particle.prototype.update = function() 
	{
		this.x += this.speedX;
		this.y += this.speedY;
		const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight);
		const docWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth);
		if (this.x + this.radius * 2 > docWidth) 
		{
			this.speedX = -this.speedX;
			this.x = docWidth - this.radius * 2;
		}
		if (this.x - this.radius * 2 < 0) 
		{
			this.speedX = -this.speedX;
			this.x = this.radius * 2;
		}
		if (this.y + this.radius * 2 > docHeight) 
		{
			this.speedY = -this.speedY;
			this.y = docHeight - this.radius * 2;
		}
		if (this.y - this.radius * 2 < 0) 
		{
			this.speedY = -this.speedY;
			this.y = this.radius * 2;
		}
		this.element.style.left = `${this.x}px`;
		this.element.style.top = `${this.y}px`;
	};
	const particles = [];
	const particleCount = 100;
	for (let i = 0; i < particleCount; i++) 
	{
		const radius = Math.random() * 3 + 1;
		const x = Math.random() * document.documentElement.clientWidth;
		const y = Math.random() * document.documentElement.scrollHeight;
		const speedX = (Math.random() - 0.5) * 2;
		const speedY = (Math.random() - 0.5) * 2;
		const color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
		particles.push(new Particle(x, y, radius, color, speedX, speedY));
	}
	function animate() 
	{
		particles.forEach(particle => particle.update());
		requestAnimationFrame(animate);
	}
	animate();
	window.addEventListener('resize', () => 
	{
		particles.forEach(particle => 
		{
			particle.x = Math.random() * document.documentElement.clientWidth;
			particle.y = Math.random() * document.documentElement.offsetHeight;
		});
	});
});