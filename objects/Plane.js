import { Object } from "./Object";
import * as THREE from "three"

export class Plane extends Object{
    constructor({dimensions,position,color,rotation,mesh}){
        super({dimensions,position,color,rotation})
        this.mesh = null;
        this.geometry = new THREE.PlaneGeometry(this.dimensions[0],this.dimensions[1])
    }
}