const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ff0000", 
  "#f44300", 
  "#e97f00", 
  "#dfb600", 
  "#c0d400", 
  "#80c900", 
  "#45be00", 
  "#10b300", 
  "#00a81f", 
  "#009e48", 
  "#00936b", 
  "#008888"
];





circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    // Apply a nonlinear scaling function to make circles shrink quicker
    let scale = 1 - (index / circles.length) * 2;
    // Ensure the scale is always positive
    scale = scale > 0 ? scale : 0;
    circle.style.transform = `scale(${scale})`;
    
    circle.x = x;
    circle.y = y;

    circle.style.zIndex = Math.round(scale * 100);

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
