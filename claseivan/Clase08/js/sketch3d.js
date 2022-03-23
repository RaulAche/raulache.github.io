var anim3d = function(p){
  p.colorfondo = '#ffff00';


  p.setup = function () {
    var sizeelemento = document.getElementById("portada");
    p.createCanvas(sizeelemento.clientWidth, sizeelemento.clientHeight, p.WEBGL)
  }
  
  p.draw = function () {
    p.background(p.colorfondo);
    p.translate(-250 * 2.5, 0, 0);
    p.normalMaterial();
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.plane(80);
    p.pop();
    p.translate(250, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.box(80, 80, 80);
    p.pop();
    p.translate(250, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.cylinder(80, 80);
    p.pop();
    p.translate(250, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.cone(80, 80);
    p.pop();
    p.translate(250, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.torus(80, 20);
    p.pop();
    p.translate(250, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.sphere(80);
    p.pop();
  }
}

function cambiaFondoAnim(cualcirculo) {

  animacion3d.colorfondo = cualcirculo.getAttribute("fill");
}

animacion3d=new p5(anim3d,"portada");