"use strict"

import { Command, moveForward, rotateLeft, rotateRight } from "./commands"
import Grid from "./grid"
import { position, Position } from "./position"
import { newOrientation, Orientation } from "./orientation"
import fs from "fs"
import co from "co"
import thunkify from "thunkify"


type Read = (s: string, t: string) => Promise<string>
const read: Read = thunkify(fs.readFile)


export interface RobotInput {
    position: Position
    command: Command[]
}

interface Input {
    grid: Grid
    robots: RobotInput[]
}

export function inputParser(inputPath: string): Promise<Input> {
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
    })
        .catch((e: any) =>
            Promise.reject(e)
        )
}



function gridParser(gridText: string) {
    const gridInt = gridText.split(" ").map(txt => parseInt(txt.trim()))
    return new Grid(gridInt[0], gridInt[1])
}

function positionParser(positionStr: string): Position {
    const [x, y, orientation] = positionStr.split(" ").map(str => str.trim())
    return position({ x: parseInt(x), y: parseInt(y) }, orientationMapping[orientation])
}


function commandParser(commandStr: string): Command[] {
    return commandStr.split("").map(cmd => commandsMapping[cmd]).filter(Boolean)
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

