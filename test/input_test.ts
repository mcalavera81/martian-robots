
import { expect } from "chai"
import { inputParser, RobotInput } from "../src/input"
import { Coords } from "../src/orientation"
import { Command } from "../src/commands"




import { moveForward as fwd, rotateLeft as left, rotateRight as right } from "../src/commands"

const inputPath = "test/input_test.txt"


describe("input module", function () {
    it("parse input text", function (done) {
        inputParser(inputPath).then(inputData => {
            const grid = inputData.grid
            expect(grid.width).to.be.equal(5)
            expect(grid.height).to.be.equal(3)

            const robot1 = inputData.robots[0]
            validateRobot(robot1, { x: 1, y: 1 }, "E",
                [right, fwd, right, fwd, right, fwd, right, fwd])

            const robot2 = inputData.robots[1]
            validateRobot(robot2, { x: 3, y: 2 }, "N",
                [fwd, right, right, fwd, left, left, fwd, fwd, right, right, fwd, left, left])

            const robot3 = inputData.robots[2]
            validateRobot(robot3, { x: 0, y: 3 }, "W",
                [left, left, fwd, fwd, fwd, left, fwd, left, fwd, left])

            done()
        }).catch(err => done(err))
    })

})

function validateRobot(robotData: RobotInput, expectedPosition: Coords,
    expectedOrientation: string, expectedCommands: Command[]) {
    expect(robotData.position.coords).to.deep.equal(expectedPosition)
    expect(robotData.position.orientation.value).to.be.equal(expectedOrientation)
    expect(robotData.command).to.eql(expectedCommands)

}
