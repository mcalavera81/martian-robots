import { Robot } from "../src/robot"
import { promisify } from "util"
import { writeFile } from "fs"

const writeFileP = promisify(writeFile)

export interface Output {
    robots: Robot[]
}

function writeOutput(file: string, output: Output): Promise<any> {
    return writeFileP(file, stringify(output), "utf-8")
}

function stringify(output: Output): string {
    return output.robots.map(robot => {
        return robot.print()
    }).join("\n")

}

export { writeOutput }