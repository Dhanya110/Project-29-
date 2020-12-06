class BlueBlock{
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.9,
          'friction':0.8,
          'density':1.0,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
   fill(102, 255, 102)
    var pos=this.body.position;
    rectMode(CENTER)
      rect(pos.x, pos.y,this.width,this.height);
      
      
     
    }
  }