"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var robot_1 = require("../src/robot");
var orientation_1 = require("../src/orientation");
var commands = require("../src/commands");
var Grid = require("../src/grid");
describe("robot module", function () {
    var robot;
    var grid;
    beforeEach(function () {
        grid = new Grid(8, 8);
        var coords = { x: 5, y: 5 };
        robot = robot_1.newRobot(coords, orientation_1.newOrientation("north"), grid);
    });
    it("should create valid Robot", function () {
        chai_1.expect(robot.coords()).to.deep.equal({ x: 5, y: 5 });
    });
    it("should handle F(forward) command", function () {
        robot = robot.handleCommands([commands.moveForward]);
        chai_1.expect(robot.coords()).to.deep.equal({ x: 5, y: 6 });
        chai_1.expect(robot.orientation()).to.be.equal("N");
    });
    it("should handle R(rotate right) command", function () {
        robot = robot.handleCommands([commands.rotateRight]);
        chai_1.expect(robot.coords()).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(robot.orientation()).to.be.equal("E");
    });
    it("should handle L(rotate right) command", function () {
        robot = robot.handleCommands([commands.rotateLeft]);
        chai_1.expect(robot.coords()).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(robot.orientation()).to.be.equal("W");
    });
    it("should handle multiple commands", function () {
        var commandList = [commands.moveForward,
            commands.rotateRight,
            commands.moveForward,
            commands.rotateRight,
            commands.moveForward,
            commands.rotateLeft,
            commands.moveForward,
        ];
        robot = robot.handleCommands(commandList);
        chai_1.expect(robot.coords()).to.deep.equal({ x: 7, y: 5 });
        chai_1.expect(robot.orientation()).to.be.equal("E");
    });
    it("should remember position after falling out", function () {
        var commandList = [commands.moveForward,
            commands.rotateRight,
            commands.moveForward,
            commands.rotateLeft,
            commands.moveForward,
            commands.moveForward,
            commands.moveForward,
        ];
        robot = robot.handleCommands(commandList);
        chai_1.expect(robot.coords()).to.deep.equal({ x: 6, y: 8 });
        chai_1.expect(robot.isOffWorld()).to.be.equal(true);
    });
    it("should not allow more one robot to fall from the same coordinates", function () {
        var commandList = [commands.moveForward,
            commands.rotateRight,
            commands.moveForward,
            commands.rotateLeft,
            commands.moveForward,
            commands.moveForward,
            commands.moveForward,
            commands.rotateRight,
            commands.moveForward,
        ];
        robot = robot.handleCommands(commandList);
        chai_1.expect(robot.isOffWorld()).to.be.equal(true);
        chai_1.expect(robot.coords()).to.deep.equal({ x: 6, y: 8 });
        var robot2 = robot_1.newRobot({ x: 5, y: 5 }, orientation_1.newOrientation("north"), grid);
        robot2 = robot2.handleCommands(commandList);
        chai_1.expect(robot2.isOffWorld()).to.be.equal(false);
        chai_1.expect(robot2.coords()).to.deep.equal({ x: 7, y: 8 });
    });
});
