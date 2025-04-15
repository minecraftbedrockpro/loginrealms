var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');

var rainnum = 500;
var rain = [];
var lightning = [];
var lightTimeCurrent = 0;
var lightTimeTotal = 0;

var w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
var h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;

window.addEventListener('resize', function() {
    w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
    h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;
});

function random(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function clearcanvas1() {
    ctx1.clearRect(0, 0, w, h);
}

function clearcanvas2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
}

function clearCanvas3() {
    ctx3.globalCompositeOperation = 'destination-out';
    ctx3.fillStyle = 'rgba(0,0,0,' + random(1, 30) / 100 + ')';
    ctx3.fillRect(0, 0, w, h);
    ctx3.globalCompositeOperation = 'source-over';
}

function createRain() {
    for (var i = 0; i < rainnum; i++) {
        rain[i] = {
            x: Math.random() * w,
            y: Math.random() * h,
            length: Math.random() * 10 + 10,
            speed: Math.random() * 10 + 10,
            opacity: Math.random() * 0.5 + 0.2
        };
    }
}

function drawRain() {
    for (var i = 0; i < rainnum; i++) {
        var r = rain[i];
        ctx1.strokeStyle = "rgba(174, 194, 224," + r.opacity + ")";
        ctx1.lineWidth = 2;
        ctx1.beginPath();
        ctx1.moveTo(r.x, r.y);
        ctx1.lineTo(r.x, r.y + r.length);
        ctx1.stroke();
    }
}

function moveRain() {
    for (var i = 0; i < rainnum; i++) {
        var r = rain[i];
        r.y += r.speed;
        if (r.y > h) {
            r.y = -r.length;
            r.x = Math.random() * w;
        }
    }
}

function createLightning() {
    if (Math.random() < 0.01) {
        lightTimeCurrent = 0;
        lightTimeTotal = Math.random() * 5 + 2;
        lightning.push({ x: Math.random() * w, y: Math.random() * h });
    }
}

function drawLightning() {
    if (lightning.length > 0) {
        ctx2.strokeStyle = "rgba(255, 255, 255, " + Math.random() * 0.4 + ")";
        ctx2.lineWidth = 3;
        ctx2.beginPath();
        ctx2.moveTo(lightning[0].x, lightning[0].y);
        ctx2.lineTo(Math.random() * w, Math.random() * h);
        ctx2.stroke();
    }
}

function moveLightning() {
    lightTimeCurrent += 0.1;
    if (lightTimeCurrent > lightTimeTotal) {
        lightning.shift();
    }
}

function drawEffects() {
    clearcanvas1();
    clearcanvas2();
    clearCanvas3();
    
    drawRain();
    drawLightning();
    
    moveRain();
    moveLightning();
    
    requestAnimationFrame(drawEffects);
}

// Inicializa os efeitos
createRain();
drawEffects();
