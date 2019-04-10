"use strict";
var Grid = /** @class */ (function () {
    function Grid(width, height) {
        this.width = width;
        this.height = height;
        this.scents = [];
    }
    Grid.prototype.isOffWorld = function (coords) {
        return coords.x < 0 || coords.x > this.width || coords.y < 0 || coords.y > this.height;
    };
    Grid.prototype.addScent = function (coords) {
        this.scents.push({ x: coords.x, y: coords.y });
    };
    Grid.prototype.hasScent = function (coords) {
        return this.scents.filter(function (elem) { return elem.x == coords.x && elem.y == coords.y; }).length > 0;
    };
    return Grid;
}());
module.exports = Grid;
