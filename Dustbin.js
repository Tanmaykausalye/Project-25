class Dustbin{

constructor(x,y,width,height){

var options={

friction : 1,
restiution : 0,
density : 2

}

this.body = Bodies.rectangle(x,y,width,height,options)

this.image = loadImage("dustbin.png")

this.width = width
this.height = height 

World.add(world,this.body)



}

display(){

var pos = this.body.position

push()

fill(0)

rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height)
imageMode(CENTER)
image(this.image,500,450,this.width,200)
pop()


}
}