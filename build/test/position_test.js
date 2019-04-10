"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var position_1 = require("../src/position");
var orientation_1 = require("../src/orientation");
describe("position module north orientation", function () {
    var orientation = "north";
    var pos;
    beforeEach(function () {
        pos = position_1.position({ x: 5, y: 5 }, orientation_1.newOrientation(orientation));
    });
    it("should create valid Position", function () {
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("N");
    });
    it("should move forward", function () {
        pos = pos.moveForward();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 6 });
        chai_1.expect(pos.orientation.value).to.be.equal("N");
    });
    it("should rotate right", function () {
        pos = pos.rotateRight();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("E");
    });
    it("should rotate left", function () {
        pos = pos.rotateLeft();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("W");
    });
});
describe("position module east orientation", function () {
    var orientation = "east";
    var pos;
    beforeEach(function () {
        pos = position_1.position({ x: 5, y: 5 }, orientation_1.newOrientation(orientation));
    });
    it("should create valid Position", function () {
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("E");
    });
    it("should move forward", function () {
        pos = pos.moveForward();
        chai_1.expect(pos.coords).to.deep.equal({ x: 6, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("E");
    });
    it("should rotate right", function () {
        pos = pos.rotateRight();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("S");
    });
    it("should rotate left", function () {
        pos = pos.rotateLeft();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("N");
    });
});
describe("position module south orientation", function () {
    var orientation = "south";
    var pos;
    beforeEach(function () {
        pos = position_1.position({ x: 5, y: 5 }, orientation_1.newOrientation(orientation));
    });
    it("should create valid Position", function () {
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("S");
    });
    it("should move forward", function () {
        pos = pos.moveForward();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 4 });
        chai_1.expect(pos.orientation.value).to.be.equal("S");
    });
    it("should rotate right", function () {
        pos = pos.rotateRight();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("W");
    });
    it("should rotate left", function () {
        pos = pos.rotateLeft();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("E");
    });
});
describe("position module west orientation", function () {
    var orientation = "west";
    var pos;
    beforeEach(function () {
        pos = position_1.position({ x: 5, y: 5 }, orientation_1.newOrientation(orientation));
    });
    it("should create valid Position", function () {
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("W");
    });
    it("should move forward", function () {
        pos = pos.moveForward();
        chai_1.expect(pos.coords).to.deep.equal({ x: 4, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("W");
    });
    it("should rotate right", function () {
        pos = pos.rotateRight();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("N");
    });
    it("should rotate left", function () {
        pos = pos.rotateLeft();
        chai_1.expect(pos.coords).to.deep.equal({ x: 5, y: 5 });
        chai_1.expect(pos.orientation.value).to.be.equal("S");
    });
});
