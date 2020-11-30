class Paper{
 ellipse(x,y,w,h){
   var options={
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:1.2
   }
   this.body=Bodies.ellipse(x,y,w,h,options);
   this.width=width;
   this.height=height;
   World.add(world,this.body);
  }
 display(){
   var pos = this.body.position;
   ellipse(pos.x,pos.y,this.width,this.height);

 }
 
};
