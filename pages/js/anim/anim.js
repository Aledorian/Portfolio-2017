var posX = 0; //position horizontale
var posY = 225; //position verticale
var vx = 15; //vitesse horizontale
var vy = 0; //vitesse verticale
var ax = 1; //acceleration horizontale = frotemment
var ay = 1; //acceleration verticale = gravité
var vr = 0;
var ang = 0;
var areaW = 1000;
var areaH = 550;
var radius = 30;
var ball= document.getElementById('balle');


setInterval(update, 1000/60);

function update() {
  vy += ay;
  posX += vx;
  posY += vy;
  ang += vr;

  if (posY>=areaH-30) {
    vy *= -.95;
    posY = areaH - 30;
    vr = vx;
  }
  if (posY<=30) {
    vy *= -1;
    posY = 30;
    vr = vx;
  }
  if (posX>=areaW-30) {
    vx *= -.75;
    posX = areaW - 30
    vr = vy;
  }
  if (posX<=30) {
    vx *= -.75;
    posX = 30;
    vr = vy;
  }
  if (vx >= 30 || vx <= -30 || vy >= 30 || vy <= -30) {
    ballshape.style.backgroundImage = "url('smiley2.png')"
  }
  else{
    ballshape.style.backgroundImage = "url('smiley.png')"
  }

  console.log(vx);
  ball.style.left = posX + "px";
  ball.style.top = posY + "px";

  document.getElementById('ballshape').style.transform = "rotate("+ang+'deg)';
  // console.log(vy);
}

// document.onkeypress = function(e){
//   if (e.keyCode == 68) {
//     vx += -10;
//   }
//   if (e.keyCode == 81) {
//     vx += 10;
//   }
//   if (e.keyCode == 90) {
//     vy += 10;
//   }
//   if (e.keyCode == 83) {
//     vy += -10;
//   }
// }

document.onkeypress = function(e){
  switch (e.key) {
      case "d": vx += 20;; break;
      case "q": vx += -20;; break;
      case "z": vy += -20; break;
      case "s": vy += 20; break;
      default:break;
  }
}
