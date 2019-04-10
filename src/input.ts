"use strict"

import { Command, moveForward, rotateLeft, rotateRight } from "./commands"
import Grid from "./grid"
import { position, Position } from "./position"
import { newOrientation, Orientation } from "./orientation"
import fs from "fs"
import co from "co"
import thunkify from "thunkify"
import { logger } from "./config/winston"

type Read = (s: string, t: string) => Promise<string>
const read: Read = thunkify(fs.readFile)
const maxCommands: number = 100


export interface RobotInput {
    position: Position
    command: Command[]
}

interface Input {
    grid: Grid
    robots: RobotInput[]
}

export function inputParser(inputPath: string): Promise<Input> {
    logger.debug(`Parsing input file: ${inputPath}`)
    return co(function* () {
        return yield read(inputPath, "utf-8")
    }).then((txt: string) => {
        const inputArray = txt.split("\n").filter((line) => line.trim())
        const numRobots = (inputArray.length - 1) / 2
        const inputParsed: Input = {
            grid: gridParser(inputArray[0]),
            robots: []
        }
        for (let i = 0; i < numRobots; i++) {
            inputParsed.robots.push({
                position: positionParser(inputArray[i * 2 + 1]),
                command: commandParser(inputArray[2 * i + 2])
            })
        }
        return inputParsed
    }).catch((e: Error) => {
        return Promise.reject(e)
    })
}



function gridParser(gridText: string): Grid {
    validateGrid(gridText)
    const gridInt = gridText.trim().split(" ").map(txt => parseInt(txt.trim()))
    return new Grid(gridInt[0], gridInt[1])
}

function positionParser(positionStr: string): Position {
    validatePosition(positionStr)
    const [x, y, orientation] = positionStr.trim().split(" ").map(str => str.trim())
    return position({ x: parseInt(x), y: parseInt(y) }, orientationMapping[orientation])
}


function commandParser(commandStr: string): Command[] {
    const trimmedCommandStr = commandStr.trim()
    validateCommands(trimmedCommandStr)
    return trimmedCommandStr.split("").map(cmd => commandsMapping[cmd])
}

function validateGrid(gridStr: string) {
    if (!/^\s*\d+\s+\d+\s*$/.test(gridStr)) {
        throw Error(`Grid malformed: ${gridStr}`)
    }
}
function validatePosition(positionStr: string) {
    if (!/^\s*\d+\s+\d+\s+[EWNS]\s*$/.test(positionStr)) {
        throw Error(`Position malformed: ${positionStr}`)
    }
}
function validateCommands(commandStr: string) {
    if (commandStr.length > 100) {
        throw Error(`Exceeded maximum (${maxCommands}) number of commands: ${commandStr.length}`)
    }

    const availableCommands = Object.keys(commandsMapping)

    if (commandStr.split("").filter(cmd => !availableCommands.includes(cmd)).length > 0) {
        throw Error(`At least one command is not valid: ${commandStr}`)
    }

}

const commandsMapping: { [key: string]: Command } = {
    F: moveForward,
    R: rotateRight,
    L: rotateLeft
}

const orientationMapping: { [key: string]: Orientation } = {
    "N": newOrientation("north"),
    "S": newOrientation("south"),
    "E": newOrientation("east"),
    "W": newOrientation("west")
}

