"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position = /** @class */ (function () {
    function Position(coords, orientation) {
        this.coords = coords;
        this.orientation = orientation;
    }
    Position.prototype.newOrientation = function (newOrientation) {
        return new Position(this.coords, newOrientation);
    };
    Position.prototype.newDelta = function (delta) {
        var newCoords = { x: this.coords.x + delta.x, y: this.coords.y + delta.y };
        return new Position(newCoords, this.orientation);
    };
    Position.prototype.moveForward = function () {
        return this.newDelta(this.orientation.delta());
    };
    Position.prototype.rotateRight = function () {
        return this.newOrientation(this.orientation.right());
    };
    Position.prototype.rotateLeft = function () {
        return this.newOrientation(this.orientation.left());
    };
    return Position;
}());
exports.Position = Position;
function position(coords, orientation) {
    return new Position(coords, orientation);
}
exports.position = position;
