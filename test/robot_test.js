'use strict';

const expect = require('chai').expect;
const newRobot = require('../src/robot').newRobot;
const newOrientation = require('../src/orientation').newOrientation
const commands = require('../src/commands');
const Grid = require('../src/grid');


describe('robot module', function () {
    let robot;
    let grid;
    
    beforeEach(function() {
        grid = new Grid(8,8);
        const coords = {x:5,y:5}
        robot = newRobot(coords,newOrientation('north'),grid)
    });
    
    it('should create valid Robot', function () {
        expect(robot.coords()).to.deep.equal({x:5,y:5})
    })

    it('should handle F(forward) command', function () {
        robot = robot.handleCommands([commands.moveForward])
        expect(robot.coords()).to.deep.equal({x:5,y:6})
        expect(robot.orientation()).to.be.equal('N')
    })

    it('should handle R(rotate right) command', function () {
        robot = robot.handleCommands([commands.rotateRight])
        expect(robot.coords()).to.deep.equal({x:5,y:5})
        expect(robot.orientation()).to.be.equal('E')
    })

    it('should handle L(rotate right) command', function () {
        robot = robot.handleCommands([commands.rotateLeft])
        expect(robot.coords()).to.deep.equal({x:5,y:5})
        expect(robot.orientation()).to.be.equal('W')
    })

    it('should handle multiple commands', function () {
        const commandList = [commands.moveForward,
                          commands.rotateRight,
                          commands.moveForward,
                          commands.rotateRight,
                          commands.moveForward,
                          commands.rotateLeft,
                          commands.moveForward,
                        ]
        robot = robot.handleCommands(commandList)
        expect(robot.coords()).to.deep.equal({x:7,y:5})
        expect(robot.orientation()).to.be.equal('E')
    })

    it('should remember position after falling out', function () {
        const commandList = [commands.moveForward,
                          commands.rotateRight,
                          commands.moveForward,
                          commands.rotateLeft,
                          commands.moveForward,
                          commands.moveForward,
                          commands.moveForward,
                        ]
        robot = robot.handleCommands(commandList)
        expect(robot.coords()).to.deep.equal({x:6,y:8})
        expect(robot.isOffWorld()).to.be.equal(true)
    })

    it('should not allow more one robot to fall from the same coordinates', function () {
        const commandList = [commands.moveForward,
                          commands.rotateRight,
                          commands.moveForward,
                          commands.rotateLeft,
                          commands.moveForward,
                          commands.moveForward,
                          commands.moveForward,
                          commands.rotateRight,
                          commands.moveForward,
                        ]
        robot = robot.handleCommands(commandList)
        expect(robot.isOffWorld()).to.be.equal(true)
        expect(robot.coords()).to.deep.equal({x:6,y:8})
        let robot2 = newRobot({x:5,y:5},newOrientation('north'),grid)
        robot2 = robot2.handleCommands(commandList)
        expect(robot2.isOffWorld()).to.be.equal(false)   
        expect(robot2.coords()).to.deep.equal({x:7,y:8})
                     
    })
})