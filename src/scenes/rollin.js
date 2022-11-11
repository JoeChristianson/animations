import { Plane } from "../../objects/Plane"
import {Cube} from "../../objects/Cube"
import { Sphere } from "../../objects/Sphere"
import { delta } from "../../utils/time"
import { state } from "../state"
import * as THREE from "three"

export const sceneStart = (scene)=>{
    // const spaceTexture = new THREE.TextureLoader().load("/assets/awe.jpg")
    // scene.background = spaceTexture;
    state.add.axesHelper(3)
    const player = new Sphere({color:{x:[250,255],y:[250,255],z:[0,255]},dimensions:{x:1},position:{x:0,y:1,z:0},_id:"main",shadow:true,type:"players",texture:"awe.jpg"})
    player.render(scene)
    state.camera.position.x = 1
    state.cameras.follow(player)
    // for(let i=0;i<400;i++){
    //     const cube = new Sphere({color:{x:[0,255],y:[0,255],z:[0,255]},dimensions:{x:.5},position:{x:0,y:.5,z:0},_id:"main",shadow:true})
    //     cube.positionX = (-50+i)*.2
    //     cube.positionZ = (Math.random()*10)-5
    //     cube.render(scene)
    // }
    const ground = new Plane({dimensions:{x:9000,y:9000},color:{x:120,y:250,z:120},position:{x:0,y:0,z:0},rotation:{x:Math.PI*1.5,y:0,z:Math.PI/4},shadow:false})
    ground.render(scene,{type:"static"})
}



export const action = ()=>{
    state.objects.players.forEach(object=>{
        const rotationRate = [-.001,0,0.001]
        object.mesh.rotationOrder = "xyz"
        object.rotation = object.rotation.map((r,i)=>r+rotationRate[i]*2*Math.PI)
        object.animate()
        object.position = [object.position[0]+(-rotationRate[2]*2*Math.PI),object.position[1],object.position[2]+(rotationRate[0]*2*Math.PI)]
    })
    state.cameras.follow()
}