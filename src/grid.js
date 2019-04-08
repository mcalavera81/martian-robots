function Grid(width,height){
    this.width = width;
    this.height = height;
    this.scents = []
}

Grid.prototype.isOffWorld = function(x,y){
    return  x<0 || x > this.width || y <0 || y > this.height
}

Grid.prototype.addScent = function(x, y) {
    this.scents.push({x,y})
}

Grid.prototype.hasScent = function(x, y) {
    return Boolean(this.scents.find(elem => elem.x == x && elem.y==y))
}


module.exports = Grid

const grid = new Grid(5,3)
grid.addScent(3,2)
console.log(grid.hasScent(3,3))