"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var robot_1 = require("./robot");
var moveForward = function (robot) {
    if (robot.isOffWorld()) {
        return robot;
    }
    var newPosition = robot.position.moveForward();
    var grid = robot.grid;
    if (grid.isOffWorld(newPosition.coords)) {
        if (!grid.hasScent(robot.position.coords)) {
            robot.setOffWorld();
            grid.addScent(robot.position.coords);
        }
        return robot;
    }
    return new robot_1.Robot(newPosition, grid);
};
exports.moveForward = moveForward;
var rotateRight = function (robot) {
    if (robot.isOffWorld()) {
        return robot;
    }
    return new robot_1.Robot(robot.position.rotateRight(), robot.grid);
};
exports.rotateRight = rotateRight;
var rotateLeft = function (robot) {
    if (robot.isOffWorld()) {
        return robot;
    }
    return new robot_1.Robot(robot.position.rotateLeft(), robot.grid);
};
exports.rotateLeft = rotateLeft;
