document.addEventListener('DOMContentLoaded', function() {
    const bouquet = document.getElementById('bouquet');
    const numRoses = 13;
    const roseWidth = 200;
    const roseHeight = 200;

    function createRose(x, y, z) {
        const rose = document.createElement('div');
        rose.className = 'rose';

        // Create flower petals
        for (let j = 0; j < 5; j++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            rose.appendChild(petal);
        }

        // Create leaf
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        const stem = document.createElement('div');
        stem.className = 'stem';
        leaf.appendChild(stem);
        for (let k = 0; k < 2; k++) {
            const leafs = document.createElement('div');
            leafs.className = 'leafs';
            leaf.appendChild(leafs);
        }
        rose.appendChild(leaf);

        // Position the rose
        rose.style.left = `${x}px`;
        rose.style.top = `${y + 400}px`; // Add 400px to push it down
        rose.style.zIndex = z;

        // Random rotation and scale for variety
        const rotation = Math.random() * 30 - 15;
        const scale = 0.9 + Math.random() * 0.2;
        rose.style.transform = `rotate(${rotation}deg) scale(${scale})`;

        // Random animation delay
        rose.style.animationDelay = `${Math.random() * 5}s`;

        bouquet.appendChild(rose);
    }

    // Create roses...
    for (let i = 0; i < 4; i++) {
        createRose(i * roseWidth * 0.7, roseHeight * 1.2, 3);
    }
    for (let i = 0; i < 5; i++) {
        createRose(i * roseWidth * 0.7 - roseWidth * 0.35, roseHeight * 0.6, 2);
    }
    for (let i = 0; i < 4; i++) {
        createRose(i * roseWidth * 0.7, 0, 1);
    }

    animateText();
});

function animateText() {
    const message = document.getElementById('message');
    
    message.style.opacity = 0;
    message.textContent = "Happy Rose Day, baby!";
    fadeIn(message);

    setTimeout(() => {
        fadeOut(message, () => {
            message.innerHTML = "Will you be my Valentine????? <br>";
            const yesButton1 = document.createElement('button');
            const yesButton2 = document.createElement('button');
            yesButton1.textContent = "Yes";
            yesButton2.textContent = "Yes";
            yesButton1.onclick = startFireworks;
            yesButton2.onclick = startFireworks;
            message.appendChild(yesButton1);
            message.appendChild(yesButton2);
            fadeIn(message);
        });
    }, 4000);
}

function fadeIn(element, callback) {
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 50);
}

function fadeOut(element, callback) {
    let opacity = 1;
    const interval = setInterval(() => {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 50);
}

function startFireworks() {
    document.body.style.background = 'black';
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Hide everything except the canvas
    document.querySelectorAll('body > *:not(#fireworks)').forEach(el => el.style.display = 'none');
    canvas.style.display = 'block';

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = canvas.height;
        const colors = ['#FFB6C1', '#FFC0CB', '#FFE4E1', '#FFFFFF', '#FF69B4', '#DB7093'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const particles = [];

        for (let i = 0; i < 50; i++) {
            particles.push({
                x: x,
                y: y,
                vx: Math.random() * 6 - 3,
                vy: Math.random() * -15 - 10,
                radius: Math.random() * 2 + 1,
                color: color
            });
        }

        return particles;
    }

    let fireworks = [];
    let animationId;

    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.05) {
            fireworks.push(createFirework());
        }

        fireworks.forEach((particles, index) => {
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1;
                p.radius *= 0.99;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                if (p.radius < 0.1) {
                    particles.splice(i, 1);
                }
            });

            if (particles.length === 0) {
                fireworks.splice(index, 1);
            }
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = 'none';

        const message = document.getElementById('message');
        message.style.display = 'block';
        message.style.opacity = 0;
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.zIndex = '20';
        message.innerHTML = "I love u sooooooooooo much, Rishi<br><br> My Babyboi, My Prince, My Love <br>Thanks for being mine and thanks for making me urs";
        message.style.fontSize = '2em';
        message.style.color = '#FFB6C1';
        message.style.textShadow = '0 0 5px rgb(252, 226, 239)';
        fadeIn(message);
    }, 4000);
}
