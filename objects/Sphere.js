import { Object } from "./Object";
import * as THREE from "three"

export class Sphere extends Object{
    constructor({dimensions,position,color,rotation,mesh}){
        super({dimensions,position,color,rotation})
        this.mesh = null;
        this.geometry = new THREE.SphereGeometry(this.dimensions[0])
    }
}