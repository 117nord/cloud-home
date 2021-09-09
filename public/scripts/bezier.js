const backgroundColor = '#048EBC';
const originColor = '#E37D11';
const pointColor = '#E33111';
const curveColor = '#3C312F';

let curves = [[
    {x: -100, y: 0},
    {x: -100, y: 200},
    {x: 100, y: 200},
    {x: 100, y: 0}
]];

function drawPoint(ctx, x, y, color) {
    ctx.save();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
}

function drawCubicBezier(ctx, curve) {
    ctx.save();

    ctx.strokeStyle = curveColor;
    ctx.moveTo(curve[0].x, curve[0].y);
    ctx.bezierCurveTo(curve[1].x, curve[1].y, curve[2].x, curve[2].y, curve[3].x, curve[3].y);
    ctx.stroke()

    ctx.restore();
}

function drawControlPoints(ctx, curve) {
    curve.forEach(point => {
        drawPoint(ctx, point.x, point.y, pointColor);
    });
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
 
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width , canvas.height);

// set (0,0) at center with y axis going up, like standard maths
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.scale(1, -1);

// draw origin
drawPoint(ctx, 0, 0, originColor);

curves.forEach(curve => {
    drawCubicBezier(ctx, curve);
    drawControlPoints(ctx, curve);
});