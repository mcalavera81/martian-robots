/*
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL
*/
'use strict';

const expect = require('chai').expect;
const commands = require('./commands');
const position = require('./position');
const newOrientation = require('./orientation').newOrientation

function gridParser(){

}
    
const commandsMapping = {
        F: commands.moveForward,
        R: commands.rotateRight,
        L: commands.rotateLeft
};

const orientationMapping={
    'N': newOrientation('north'),
    'S': newOrientation('south'),
    'E': newOrientation('east'),
    'W': newOrientation('west')
}

function positionParser(positionStr){
    const [x,y,orientation] =positionStr.split(' ').map(str=>str.trim())
    return position(x,y,orientationMapping[orientation])
}


function commandParser(commandStr){
    return commandStr.split('').map(cmd=>commandsMapping[cmd]).filter(Boolean)
}

console.log(commandParser('LFRT'))
console.log(positionParser('1 1 E'))


  