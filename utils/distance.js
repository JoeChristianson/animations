export function checkWithinDistance(position1,position2,targetDistance,options){
    const distance = measureDistance(position1,position2,options)
    console.log(distance);
    console.log(targetDistance)
    if(distance<=targetDistance){
        return true
    }
    return false
}

export function measureDistance(position1,position2,options){
    let distance
    const dimensions = options?.dimensions||3
    const xDelta = Math.abs(position1[0]-position2[0])
    const yDelta = Math.abs(position1[1]-position2[1])
    const zDelta = Math.abs(position1[2]-position2[2])
    console.log("xDelta",xDelta);
    console.log("zDelta",xDelta);
    if(dimensions===2){
        distance = Math.sqrt(xDelta^2+zDelta^2)
    }
    else if(dimensions===3){
        distance = Math.sqrt(xDelta^2+zDelta^2+yDelta^2)
    }
    return distance
}