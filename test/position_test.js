const expect = require('chai').expect;
const position = require('../src/position');
const newOrientation = require('../src/orientation').newOrientation


describe('position module; north orientation', function () {
    const orientation = 'north'
    let pos;

    beforeEach(function() {
        pos = position(5,5,newOrientation(orientation))
    });
    it('should create valid Position', function () {
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('N')
    })
    it('should move forward', function () {
        pos= pos.moveForward()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(6)
        expect(pos.orientation.value).to.be.equal('N')

    })
    it('should rotate right', function () {
        pos= pos.rotateRight()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('E')

    })
    it('should rotate left', function () {
        pos= pos.rotateLeft()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('W')

    })
})


describe('position module; east orientation', function () {
    const orientation = 'east'
    let pos;

    beforeEach(function() {
        pos = position(5,5,newOrientation(orientation))
    });
    it('should create valid Position', function () {
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('E')
    })
    it('should move forward', function () {
        pos= pos.moveForward()
        expect(pos.x).to.be.equal(6)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('E')
    })
    it('should rotate right', function () {
        pos= pos.rotateRight()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('S')
    })
    it('should rotate left', function () {
        pos= pos.rotateLeft()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('N')
    })
})

describe('position module; south orientation', function () {
    const orientation = 'south'
    let pos;

    beforeEach(function() {
        pos = position(5,5,newOrientation(orientation))
    });

    it('should create valid Position', function () {
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('S')
    })

    it('should move forward', function () {
        pos= pos.moveForward()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(4)
        expect(pos.orientation.value).to.be.equal('S')
    })

    it('should rotate right', function () {
        pos= pos.rotateRight()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('W')
    })
    it('should rotate left', function () {
        pos= pos.rotateLeft()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('E')
    })
})

describe('position module; west orientation', function () {
    const orientation = 'west'
    let pos;

    beforeEach(function() {
        pos = position(5,5,newOrientation(orientation))
    });

    it('should create valid Position', function () {
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('W')
    })

    it('should move forward', function () {
        pos= pos.moveForward()
        expect(pos.x).to.be.equal(4)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('W')
    })

    it('should rotate right', function () {
        pos= pos.rotateRight()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('N')

    })
    it('should rotate left', function () {
        pos= pos.rotateLeft()
        expect(pos.x).to.be.equal(5)
        expect(pos.y).to.be.equal(5)
        expect(pos.orientation.value).to.be.equal('S')
    })
})