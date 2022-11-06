import { convertPositionToArray } from "./position";

export const randomCoords = (coordsRange,number,{array,round})=>{
    const points = []
    if(!number){
        const res = {x:randomFloatWithinRange(coordsRange.x,round),y:randomFloatWithinRange(coordsRange.y,round),z:randomFloatWithinRange(coordsRange.z,round)};
        if(!array){
            return res
        }
        return convertPositionToArray(res)
    }
    console.log(coordsRange);
    for (let i=0;i<number;i++){
        const coords = {x:randomFloatWithinRange(coordsRange.x,round),y:randomFloatWithinRange(coordsRange.y,round),z:randomFloatWithinRange(coordsRange.z,round)};
        points.push(coords)
    }
    if(!array){
        return points
    }
    return points.map(point=>convertPositionToArray(point))

}

const randomFloatWithinRange = (range,round)=>{
    if(!Array.isArray(range)){
        return range
    }
    const [a,b] = range
    if(a===b){
        return a
    }
    const low = Math.min(a,b)
    const high = Math.max(a,b)
    const delta = high-low;
    const add = Math.random()*delta
    if(round){
        return Math.round(low+add)
    }
    return low+add
}

// const test = randomCoords({x:[1,100],y:[1,10],z:[30,50]},1)

