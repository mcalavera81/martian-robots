"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function newOrientation(value) {
    if (!exports.orientations[value]) {
        throw "Orientation not valid: " + JSON.stringify(value);
    }
    return exports.orientations[value];
}
exports.newOrientation = newOrientation;
var Coords = /** @class */ (function () {
    function Coords(x, y) {
        this.x = x;
        this.y = y;
    }
    return Coords;
}());
exports.Coords = Coords;
exports.orientations = {
    "north": {
        value: "N",
        right: function () { return exports.orientations["east"]; },
        left: function () { return exports.orientations["west"]; },
        delta: function () { return { x: 0, y: 1 }; }
    },
    "east": {
        value: "E",
        right: function () { return exports.orientations["south"]; },
        left: function () { return exports.orientations["north"]; },
        delta: function () { return { x: 1, y: 0 }; }
    },
    "south": {
        value: "S",
        right: function () { return exports.orientations["west"]; },
        left: function () { return exports.orientations["east"]; },
        delta: function () { return { x: 0, y: -1 }; }
    },
    "west": {
        value: "W",
        right: function () { return exports.orientations["north"]; },
        left: function () { return exports.orientations["south"]; },
        delta: function () { return { x: -1, y: 0 }; }
    }
};
