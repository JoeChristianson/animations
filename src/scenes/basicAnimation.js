import {Cube} from "../../objects/Cube"
import { delta } from "../../utils/time"
import { state } from "../state"



export const basicAnimation = (scene)=>{
    const cube = new Cube({color:{x:255,y:0,z:0}})
    cube.render(scene)
    return cube
}

export const basicAction = (object)=>{
    const d = delta()
    object.rotation[1] =state.elapsed;
    object.position[1] = Math.sin(state.elapsed/2)
    object.position[0] = Math.cos(state.elapsed/2)
    object.animate()
    // object.mesh.rotation.set(...object.rotation)
}