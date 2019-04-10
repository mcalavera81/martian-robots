"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var position_1 = require("./position");
var Robot = /** @class */ (function () {
    function Robot(position, grid) {
        this.grid = grid;
        this.position = position;
        this.offWorld = false;
    }
    Robot.prototype.coords = function () {
        return this.position.coords;
    };
    Robot.prototype.orientation = function () {
        return this.position.orientation.value;
    };
    Robot.prototype.setOffWorld = function () {
        this.offWorld = true;
    };
    Robot.prototype.isOffWorld = function () {
        return this.offWorld;
    };
    Robot.prototype.handleCommands = function (commands) {
        if (commands.length > 0) {
            var command = commands[0];
            var newRobot_1 = command ? command(this) : this;
            return newRobot_1.handleCommands(commands.slice(1));
        }
        else {
            return this;
        }
    };
    Robot.prototype.print = function () {
        return this.coords().x + " " + this.coords().y + " " + this.orientation() + (this.isOffWorld() ? " LOST" : "");
    };
    return Robot;
}());
exports.Robot = Robot;
function newRobot(coords, orientation, grid) {
    return new Robot(position_1.position(coords, orientation), grid);
}
exports.newRobot = newRobot;
