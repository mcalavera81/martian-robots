import { Robot } from "./robot"


export type Command = (robot: Robot) => Robot


const moveForward: Command = (robot) => {
    if (robot.isOffWorld()) {
        return robot
    }
    const newPosition = robot.position.moveForward()
    const grid = robot.grid
    if (grid.isOffWorld(newPosition.coords)) {
        if (!grid.hasScent(robot.position.coords)) {
            robot.setOffWorld()
            grid.addScent(robot.position.coords)
        }
        return robot
    }

    return new Robot(newPosition, grid)

}

const rotateRight: Command = (robot) => {
    if (robot.isOffWorld()) {
        return robot
    }
    return new Robot(robot.position.rotateRight(), robot.grid)
}


const rotateLeft: Command = (robot) => {
    if (robot.isOffWorld()) {
        return robot
    }
    return new Robot(robot.position.rotateLeft(), robot.grid)
}


export {
    moveForward,
    rotateRight,
    rotateLeft
}
