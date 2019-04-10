import { Position, position } from "./position"
import Grid from "./grid"
import { Coords, Orientation } from "./orientation"
import { Command } from "./commands"

class Robot {

  grid: Grid
  position: Position
  offWorld: boolean

  constructor(position: Position, grid: Grid) {
    this.grid = grid
    this.position = position
    this.offWorld = false
  }

  coords(): Coords {
    return this.position.coords
  }

  orientation(): string {
    return this.position.orientation.value
  }

  setOffWorld() {
    this.offWorld = true
  }

  isOffWorld() {
    return this.offWorld
  }

  handleCommands(commands: Command[]): Robot {
    if (commands.length > 0) {
      const command = commands[0]
      const newRobot = command ? command(this) : this
      return newRobot.handleCommands(commands.slice(1))
    } else {
      return this
    }
  }

  print(): string {
    return `${this.coords().x} ${this.coords().y} ${this.orientation()}${this.isOffWorld() ? " LOST" : ""}`
  }
}


function newRobot(coords: Coords, orientation: Orientation, grid: Grid) {
  return new Robot(position(coords, orientation), grid)
}

export { Robot, newRobot }
