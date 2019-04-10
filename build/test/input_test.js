"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var input_1 = require("../src/input");
var commands_1 = require("../src/commands");
var inputPath = "test/input_test.txt";
describe("input module", function () {
    it("parse input text", function (done) {
        input_1.inputParser(inputPath).then(function (inputData) {
            var grid = inputData.grid;
            chai_1.expect(grid.width).to.be.equal(5);
            chai_1.expect(grid.height).to.be.equal(3);
            var robot1 = inputData.robots[0];
            validateRobot(robot1, { x: 1, y: 1 }, "E", [commands_1.rotateRight, commands_1.moveForward, commands_1.rotateRight, commands_1.moveForward, commands_1.rotateRight, commands_1.moveForward, commands_1.rotateRight, commands_1.moveForward]);
            var robot2 = inputData.robots[1];
            validateRobot(robot2, { x: 3, y: 2 }, "N", [commands_1.moveForward, commands_1.rotateRight, commands_1.rotateRight, commands_1.moveForward, commands_1.rotateLeft, commands_1.rotateLeft, commands_1.moveForward, commands_1.moveForward, commands_1.rotateRight, commands_1.rotateRight, commands_1.moveForward, commands_1.rotateLeft, commands_1.rotateLeft]);
            var robot3 = inputData.robots[2];
            validateRobot(robot3, { x: 0, y: 3 }, "W", [commands_1.rotateLeft, commands_1.rotateLeft, commands_1.moveForward, commands_1.moveForward, commands_1.moveForward, commands_1.rotateLeft, commands_1.moveForward, commands_1.rotateLeft, commands_1.moveForward, commands_1.rotateLeft]);
            done();
        }).catch(function (err) { return done(err); });
    });
});
function validateRobot(robotData, expectedPosition, expectedOrientation, expectedCommands) {
    chai_1.expect(robotData.position.coords).to.deep.equal(expectedPosition);
    chai_1.expect(robotData.position.orientation.value).to.be.equal(expectedOrientation);
    chai_1.expect(robotData.command).to.eql(expectedCommands);
}
