const position = require('../src/position');

function Robot(position,grid) {
    this.position = position;
    this.grid = grid;
    this.offWorld = false;
    this.coords = function(){
      return {
        x: this.position.x,
        y: this.position.y
      }
    }
    this.orientation = function(){
      return this.position.orientation.value
    }
};

Robot.prototype.handleCommands= function(commands){
  if (commands.length > 0) {
    const command = commands[0]
    var newRobot = command ? command(this) : this;
    return newRobot.handleCommands(commands.slice(1));
  }else{
    return this;
  }
}


Robot.prototype.setOffWorld = function(){
   this.offWorld = true
}

Robot.prototype.isOffWorld = function(){
  return this.offWorld
}

module.exports.newRobot = function newRobot(x,y,orientation,grid){
    return new Robot(position(x,y,orientation),grid)
}

module.exports.Robot = Robot
