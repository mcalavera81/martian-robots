
"use strict"
import { inputParser } from "./input"
import { writeOutput, Output } from "./output"
import { newRobot } from "../src/robot"
import { logger } from "./config/winston"

const inputPath = process.argv[2] || "input.txt"


function app(inputPath: string) {
    logger.debug("Starting app ...")
    inputParser(inputPath).then(data => {
        const robotsAfter = data.robots.map(robotInputData => {
            const position = robotInputData.position
            const command = robotInputData.command
            return newRobot(position.coords, position.orientation, data.grid)
                .handleCommands(command)
        })
        const output: Output = { robots: robotsAfter }
        writeOutput(inputPath + ".out", output)
    }).catch(logError)
}

function logError(e: Error) {
    logger.error(JSON.stringify(e, Object.getOwnPropertyNames(e), 4))
}

app(inputPath)
