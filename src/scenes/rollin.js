import { Plane } from "../../objects/Plane"
import {Circle} from "../../objects/Circle"
import { Sphere } from "../../objects/Sphere"
import { delta } from "../../utils/time"
import { state } from "../state"
import * as THREE from "three"
import { CSSRulePlugin } from "gsap/all"

export const sceneStart = (scene)=>{
    

    const player = new Sphere({_id:"orb",color:{x:[250,255],y:[250,255],z:[0,255]},position:{x:0,y:1,z:0},_id:"main",shadow:true,type:"players",texture:"ball/awe.jpg"})

    // const player = new Sphere({color:{x:[250,255],y:[250,255],z:[0,255]},dimensions:{x:1},position:{x:0,y:1,z:0},_id:"main",shadow:true,type:"players",texture:"ball/awe.jpg"})
    player.render(scene)
    state.camera.position.x = 1
    state.cameras.follow(player,{shift:{y:2.5}})
    for(let i=0;i<400;i++){
        const cube = new Sphere({type:"moving",dimensions:{x:[0,1.5]},position:{x:[-1000,1000],y:[0,1000],z:[1000,-1000]},color:{x:[250,256],y:[170,255],z:[170,256]},shadow:false})
        cube.render(scene)
    }
    const ground = new Plane({dimensions:{x:9000,y:9000},color:{x:120,y:250,z:120},position:{x:0,y:0,z:0},rotation:{x:Math.PI*1.5,y:0,z:Math.PI/4},shadow:true,texture:"ball/awe.jpg"})
    ground.render(scene,{type:"static"})
    const targetCircle = new Circle({dimensions:{x:10},position:{x:0,y:0,z:-100},color:{x:255,y:0,z:0 },_id:"target",ground:true})
    targetCircle.render(state.scene)
    player.moveToTarget("target",2)
}



export const action = ()=>{
    state.objects.players.forEach(player=>player.act())
    
    state.cameras.follow()
}