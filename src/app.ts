
"use strict"
import { inputParser } from "./input"
import { writeOutput, Output } from "./output"
import { newRobot } from "../src/robot"

const inputPath = process.argv[2] || "src/input.txt"

inputParser(inputPath).then(data => {
    const grid = data.grid
    const robots = data.robots

    const robotsAfter = robots.map(robotInputData => {
        const position = robotInputData.position
        const command = robotInputData.command
        return newRobot(position.coords, position.orientation, grid)
            .handleCommands(command)
    })
    const output: Output = {robots: robotsAfter}
    writeOutput(inputPath + ".out", output)
}).catch(console.log)

/*
1 1 E
3 3 N LOST
2 3 S
*/