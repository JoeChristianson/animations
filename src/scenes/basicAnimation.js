import {Cube} from "../../objects/Cube"
import { Sphere } from "../../objects/Sphere"
import { delta } from "../../utils/time"
import { state } from "../state"
import * as THREE from "three"

export const sceneStart = (scene)=>{
    // const spaceTexture = new THREE.TextureLoader().load("/assets/awe.jpg")
    // state.scene.background = spaceTexture
    let i = 0
    while(i<10){
        const cube = new Sphere({color:{x:255,y:255,z:255},_id:"main",texture:"awe.jpg"})
        cube.positionX = -100+Math.random()*200
        cube.positionY = -100+Math.random()*200
        cube.positionZ = -100+Math.random()*200
        cube.render(scene)
        i++
    }
    for(let i=0;i<4000;i++){
        const cube = new Sphere({type:"moving",dimensions:{x:[0,1.5]},position:{x:[-1000,1000],y:[-1000,1000],z:[1000,-1000]},color:{x:[250,256],y:[170,255],z:[170,256]},shadow:false})
        cube.render(scene)
    }
    // return cube
}



export const action = ()=>{
    state.objects.moving.forEach((object)=>{
        if(object._id==="main"){
            object.position[1] = object.startingPosition[1]+ Math.sin(state.elapsed/2)
            object.position[0] = object.startingPosition[0]+ Math.cos(state.elapsed/2)
            object.animate()
        }else{
            if(Math.random()<.005){

                // object.dimensions[0] =  object.startingDimensions[0]*1.5
                const growth = Math.random()
                object.dimensions.x = object.startingDimensions.x*(1+growth)
                object.animate()
            }else{
                if(Math.random()>.99){
                    object.dimensions = object.startingDimensions
                    object.animate()
                }
            }
        }
    })
    const newRotationChange = {x:0.002,y:0.001,z:0.003}
    const cameraRotation = state.camera.rotation
    const newRotation = {x:null,y:null,z:null}
    for (let axis in newRotation){
        state.camera.rotation[axis] = cameraRotation[axis]+newRotationChange[axis]
    }
}