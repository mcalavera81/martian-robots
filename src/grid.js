function Grid(width,height){
    this.width = width;
    this.height = height;
    this.scents = []
}

Grid.prototype.isOffWorld = function(coords){
    return  coords.x<0 || coords.x > this.width || coords.y <0 || coords.y > this.height
}

Grid.prototype.addScent = function(coords) {
    this.scents.push({x: coords.x, y: coords.y})
}

Grid.prototype.hasScent = function(coords) {
    return Boolean(this.scents.find(elem => elem.x == coords.x && elem.y==coords.y))
}


module.exports = Grid

const grid = new Grid(5,3)
grid.addScent(3,2)
console.log(grid.hasScent(3,3))