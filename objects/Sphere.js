import { Object } from "./Object";
import * as THREE from "three"

export class Sphere extends Object{
    constructor(options){
        super(options)
        this.mesh = null;
        this.geometry = new THREE.SphereGeometry(this.dimensions[0])
    }
    roll(){
        const rotationRate = [-.001,0,0.001]
        this.mesh.rotationOrder = "xyz"
        this.rotation = this.rotation.map((r,i)=>r+rotationRate[i]*2*Math.PI)
        console.log(this.rotation);
        this.position = [this.position[0]+(-rotationRate[2]*2*Math.PI),this.position[1],this.position[2]+(rotationRate[0]*2*Math.PI)]
    }
}