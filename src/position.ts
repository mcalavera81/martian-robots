import { Coords, Orientation } from "./orientation"


export class Position {
    coords: Coords
    orientation: Orientation

    constructor(coords: Coords, orientation: Orientation) {
        this.coords = coords
        this.orientation = orientation
    }
    newOrientation(newOrientation: Orientation): Position {
        return new Position(this.coords, newOrientation)
    }

    newDelta(delta: Coords): Position {
        const newCoords = { x: this.coords.x + delta.x, y: this.coords.y + delta.y }
        return new Position(newCoords, this.orientation)
    }

    moveForward(): Position {
        return this.newDelta(this.orientation.delta())
    }

    rotateRight(): Position {
        return this.newOrientation(this.orientation.right())
    }

    rotateLeft(): Position {
        return this.newOrientation(this.orientation.left())
    }

}


export function position(coords: Coords, orientation: Orientation) {
    return new Position(coords, orientation)
}