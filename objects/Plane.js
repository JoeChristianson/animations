import { Object } from "./Object";
import * as THREE from "three"

export class Plane extends Object{
    constructor(options){
        super(options)
        this.mesh = null;
        this.geometry = new THREE.PlaneGeometry(this.dimensions[0],this.dimensions[1])
    }
}