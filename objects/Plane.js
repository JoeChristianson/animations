import { Object } from "./Object";
import * as THREE from "three"
import { state } from "../src/state";

export class Plane extends Object{
    constructor(options){
        super(options)
        this.mesh = null;
        this.geometry = new THREE.PlaneGeometry(this.dimensions[0],this.dimensions[1])
        if(options.ground){
            this.ground()
        }
    }
    ground(){
        this.rotation = [3*Math.PI/2,0,0]
        this.position[1] = state.topography.ground.height+= .01
        console.log(this.position)
        console.log("this is the ground")
    }
}