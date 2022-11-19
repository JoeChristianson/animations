import { Object } from "./Object";
import * as THREE from "three"

export class Sphere extends Object{
    constructor(options){
        super(options)
        this.mesh = null;
        this.geometry = new THREE.SphereGeometry(this.dimensions[0])
    }
    roll(){

    }
}