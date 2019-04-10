import { Coords } from "./orientation"



class Grid {
    width: number
    height: number
    scents: Array<Coords>

    constructor(width: number, height: number) {
        this.validate(width, height)
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

    private validate(width: number, height: number) {
        if (Number.isNaN(width) || Number.isNaN(height) ||
            width > 50 || height > 50 ||
            width < 0 || height < 0) {
            throw Error(`Not valid arguments width: ${width}, height: ${height} for the Grid`)
        }
    }

}


export = Grid