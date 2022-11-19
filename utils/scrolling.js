import { state } from "../src/state"
export const findClosestSceneIndex = ()=>{
    let closest = 1000000;
    let index = null
    const centers = state.sceneWindows.getCenters()
    const scrollY = state.screen.getYCenter()
    for(let i=0;i<centers.length;i++){
        const distance = Math.abs(centers[i]-scrollY)
        if(distance<closest){
            index = i;
            closest = distance
        }
    }
    return index
}