const Robot = require('../src/robot').Robot;


function moveForward(robot){
    if(robot.isOffWorld()){
        return robot        
    }
    const newPosition = robot.position.moveForward()
    const grid = robot.grid; 
    if(grid.isOffWorld(newPosition.coords)){
        if(!grid.hasScent(robot.position.coords)){
            robot.setOffWorld()
            grid.addScent(robot.position.coords)
        }   
        return robot
    }
    
    return new Robot(newPosition,grid)
    
}
  
function rotateRight(robot){
    if(robot.isOffWorld()){
        return robot        
    }
    return new Robot(robot.position.rotateRight(),robot.grid)
}
  
function rotateLeft(robot){
    if(robot.isOffWorld()){
        return robot        
    }
    return new Robot(robot.position.rotateLeft(),robot.grid)
}

  
module.exports = {
      moveForward,
      rotateRight,
      rotateLeft
}
