"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = require("./input");
var output_1 = require("./output");
var robot_1 = require("../src/robot");
var inputPath = process.argv[2] || "src/input.txt";
input_1.inputParser(inputPath).then(function (data) {
    var grid = data.grid;
    var robots = data.robots;
    var robotsAfter = robots.map(function (robotInputData) {
        var position = robotInputData.position;
        var command = robotInputData.command;
        return robot_1.newRobot(position.coords, position.orientation, grid)
            .handleCommands(command);
    });
    var output = { robots: robotsAfter };
    output_1.writeOutput(inputPath + ".out", output);
}).catch(console.log);
