var sc;
var posX = 0; //position horizontale
var posY = 225; //position verticale
var vx = 0; //vitesse horizontale
var vy = 0; //vitesse verticale
var speed = 4;
var angle = 0;
var vr = 0;
var symboles = "0123456789ABCDEF";


function symboleAleatoire() {
  var symbRand = Math.floor(Math.random() * symboles.length);
  // console.log(symboles[symbRand]);
  return symbRand;
}

function colRand(){
  var couleur = [];
  for (var i = 0; i < 6; i++) {
    var rand = symboleAleatoire();
    couleur.push(symboles[rand]);
  }
    couleur = couleur.join("");
    couleur = "#"+couleur;
    return couleur;
}

setInterval(colRand, 1);

// console.log(Math.PI);

window.onload = function(){
  sc = document.getElementById('spacecraft');
  requestAnimationFrame(update);
}

// var fps = 0;
// setInterval(resetFPS,1000);

function update(){
  vx = speed * Math.cos( angle*Math.PI/180);
  vy = speed * Math.sin( angle*Math.PI/180);
  posX += vx;
  posY += vy;
  angle += vr;

  if(posX <= 0){
    posX = 1250;
  }
  if(posX >= 1250){
    posX = 0;
    spacecraftshape.style.backgroundColor = colRand()
  }
  if(posY <= -45){
    posY = 565;
  }
  if(posY >= 610){
    posY = -45;
  }

  sc.style.left = posX + "px";
  sc.style.top = posY + "px";
  spacecraftshape.style.transform = "rotate("+angle+"deg)"
  requestAnimationFrame(update);
}

document.onkeydown = function(e){
  switch (e.key) {
      case "ArrowLeft": vr = -3; break;
      case "ArrowRight": vr = 3; break;
      case "ArrowUp": speed = speed + .5; break;
      case "ArrowDown": speed = speed - .5; break;
      default:break;
  }
}

document.onkeyup = function(e){
  switch (e.key) {
      case "ArrowLeft": vr = 0; break;
      case "ArrowRight": vr = 0; break;
      default:break;
  }
}
// function resetFPS(){
//
//   fps=0
// }
