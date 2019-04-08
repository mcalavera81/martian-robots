function newOrientation(value){
    if(!orientations[value]){
        throw "Orientation not valid: " + JSON.stringify(value)
    }    
    return orientations[value]
} 

const orientations={
    'north':{
        value: 'N',
        right(){ return orientations['east']},
        left(){ return orientations['west']},
        delta(){return {x:0,y:1}}
    },
    'east':{
        value: 'E',
        right(){ return orientations['south']},
        left(){ return orientations['north']},
        delta(){return {x:1,y:0}}
    },
    'south':{
        value: 'S',
        right(){ return orientations['west']},
        left(){ return orientations['east']},
        delta(){return {x:0,y:-1}}
    },
    'west':{
        value: 'W',
        right(){ return orientations['north']},
        left(){ return orientations['south']},
        delta(){return {x:-1,y:0}}
    }
}

module.exports= {
    newOrientation,
    orientations
} 