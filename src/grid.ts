import { Coords } from "./orientation"

class Grid {
    width: Number
    height: Number
    scents: Array<Coords>

    constructor(width: Number, height: Number) {
        this.width = width
        this.height = height
        this.scents = []
    }

    isOffWorld(coords: Coords) {
        return coords.x < 0 || coords.x > this.width || coords.y < 0 || coords.y > this.height
    }

    addScent(coords: Coords) {
        this.scents.push({ x: coords.x, y: coords.y })
    }

    hasScent(coords: Coords) {
        return this.scents.filter(elem => elem.x == coords.x && elem.y == coords.y).length > 0
    }

}


export = Grid