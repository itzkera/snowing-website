function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    })
}

const canvas = document.getElementById("snow");
const ctx = canvas.GetContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let snowflakes = [];
for (let i = 0; i < 120; i++) {
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1
    })
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    snowflakes.forEach(f => {
        ctx.BeginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        // pi?
        ctx.fill();
        f.y += 1;
        if (f.y > canvas.height) {
            f.y = 0;
            f.x = Math.random() * canvas.width;
        }
    })
}

setInterval(draw, 30);
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})