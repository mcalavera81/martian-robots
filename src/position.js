const newOrientation = require('./orientation').newOrientation

function Position(coords, orientation) {
    this.coords = coords;
    this.orientation = orientation;
}

Position.prototype.newOrientation = function(newOrientation){
    return new Position(this.coords, newOrientation)
}

Position.prototype.newDelta = function(delta){
    const newCoords = {x:this.coords.x+delta.x, y:this.coords.y+delta.y }
    return new Position(newCoords,this.orientation)
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

module.exports = function(coords,orientation){
    return new Position(coords,orientation)
}