import { expect } from "chai"
import { position, Position } from "../src/position"
import { newOrientation } from "../src/orientation"


describe("position module north orientation", function () {
    const orientation = "north"
    let pos: Position

    beforeEach(function () {
        pos = position({ x: 5, y: 5 }, newOrientation(orientation))
    })
    it("should create valid Position", function () {
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("N")
    })
    it("should move forward", function () {
        pos = pos.moveForward()
        expect(pos.coords).to.deep.equal({ x: 5, y: 6 })
        expect(pos.orientation.value).to.be.equal("N")

    })
    it("should rotate right", function () {
        pos = pos.rotateRight()
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("E")

    })
    it("should rotate left", function () {
        pos = pos.rotateLeft()
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("W")

    })
})


describe("position module east orientation", function () {
    const orientation = "east"
    let pos: Position

    beforeEach(function () {
        pos = position({ x: 5, y: 5 }, newOrientation(orientation))
    })
    it("should create valid Position", function () {
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("E")
    })
    it("should move forward", function () {
        pos = pos.moveForward()
        expect(pos.coords).to.deep.equal({ x: 6, y: 5 })
        expect(pos.orientation.value).to.be.equal("E")
    })
    it("should rotate right", function () {
        pos = pos.rotateRight()
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("S")
    })
    it("should rotate left", function () {
        pos = pos.rotateLeft()
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("N")
    })
})

describe("position module south orientation", function () {
    const orientation = "south"
    let pos: Position

    beforeEach(function () {
        pos = position({ x: 5, y: 5 }, newOrientation(orientation))
    })

    it("should create valid Position", function () {
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("S")
    })

    it("should move forward", function () {
        pos = pos.moveForward()
        expect(pos.coords).to.deep.equal({ x: 5, y: 4 })
        expect(pos.orientation.value).to.be.equal("S")
    })

    it("should rotate right", function () {
        pos = pos.rotateRight()
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("W")
    })
    it("should rotate left", function () {
        pos = pos.rotateLeft()
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("E")
    })
})

describe("position module west orientation", function () {
    const orientation = "west"
    let pos: Position

    beforeEach(function () {
        pos = position({ x: 5, y: 5 }, newOrientation(orientation))
    })

    it("should create valid Position", function () {
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("W")
    })

    it("should move forward", function () {
        pos = pos.moveForward()
        expect(pos.coords).to.deep.equal({ x: 4, y: 5 })
        expect(pos.orientation.value).to.be.equal("W")
    })

    it("should rotate right", function () {
        pos = pos.rotateRight()
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("N")

    })
    it("should rotate left", function () {
        pos = pos.rotateLeft()
        expect(pos.coords).to.deep.equal({ x: 5, y: 5 })
        expect(pos.orientation.value).to.be.equal("S")
    })
})