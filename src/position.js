const newOrientation = require('./orientation').newOrientation

function Position(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
}

Position.prototype.newOrientation = function(newOrientation){
    return new Position(this.x,this.y, newOrientation)
}

Position.prototype.newDelta = function(delta){
    return new Position(this.x+delta.x,this.y+delta.y,this.orientation)
}

Position.prototype.moveForward = function(){
    return this.newDelta(this.orientation.delta())
   
}

Position.prototype.rotateRight = function(){
    return this.newOrientation(this.orientation.right())
}
  
Position.prototype.rotateLeft = function(){
    return this.newOrientation(this.orientation.left())
}

module.exports = function(x,y,orientation){
    return new Position(x,y,orientation)
}