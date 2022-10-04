// re-wrote my previous processing code into p5.js
// with acceleration disabled

function Drop(p) {
  this.x = p.random(p.width);
  this.y = p.random(-300, -50);
  this.z = p.random(0, 3);
  this.len = p.map(this.z, 0, 20, 10, 200);
  this.yspeed = p.map(this.z, 0, 20, 1, 6);
  this.disappear = p.random(150, 2700);
  this.reappear = p.random(0, 250);
  this.main = p.char(0x3040 + p.random(0x54));

  this.fall = function () {
    this.y = this.y + this.yspeed;
    // var grav = p.map(this.z, 0, 200, 0, 0.2);
    // this.yspeed = this.yspeed + grav;

    if (this.y > p.height) {
      this.y = p.random(-200, -100);
      // this.yspeed = p.map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function () {
    p.textFont("Arial Unicode MS Regular", p.map(this.z, 0, 7, 5, 7));
    if (this.y < this.disappear)
      // the p.mapping is used to adjust opacity of the white character based on distance from the screen
      p.fill(255, 255, 255, p.map(this.z, 0, 20, 150, 200));
    else if (this.y > this.disappear) p.fill(255, 255, 255, 0);
    else if (this.y > this.reappear) p.fill(255, 255, 255, 255);
    var c = p.char(0x3040 + p.random(0x54));
    p.text(this.main, this.x, this.y);
    p.textAlign(p.LEFT);
    var ypos = this.y;
    let stringLen = p.random(1, 100);
    for (var i = 1; i < stringLen; i++) {
      p.fill(51, 204, 51, p.map(this.z, 0, 20, 150, 200));
      c = p.char(0x3041 + p.random(0x54));
      if (
        this.y > p.random((p.height * 5) / 7, p.height) &&
        this.y < p.height
      ) {
        // p.randomly make characters disappear
        if (p.random() >= 0.5) {
          p.fill(51, 204, 51, 0);
        } else {
          p.fill(255, 255, 255, p.map(this.z, 0, 20, 150, 200));
        }
      } else p.fill(51, 204, 51, p.map(this.y, 0, 1920, 250, 0));
      p.text(c, this.x, ypos - p.map(this.z, 0, 20, 5, 30));
      ypos = ypos - p.map(this.z, 0, 20, 5, 30);
      p.textAlign(p.LEFT);
    }
  };
}

export default function sketch(p) {
  var d = [];

  p.setup = function () {
    let height = 200;
    let width = 500;

    p.createCanvas(width, height);
    for (var i = 0; i < 100; i++) {
      d[i] = new Drop(p);
    }
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    console.log(props.dimensions);
    if (props.dimensions) {
      p.width = props.dimensions.width;
      p.height = props.dimensions.height;
      d.forEach((e) => {
        console.log(e);
        e.x = p.random(p.width);
      });
    }
    console.log("p stuff", p.height, p.width);
    p.resizeCanvas(p.width, p.height);
  };

  p.draw = function () {
    p.background(0, 20, 0);
    for (var i = 0; i < d.length; i++) {
      d[i].fall();
      d[i].show();
    }
  };
}
