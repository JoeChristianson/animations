import { Plane } from "./Plane";
import * as THREE from "three"

export class Circle extends Plane{
    constructor(options){
        super(options)
        this.mesh = null;
        this.geometry = new THREE.CircleGeometry(this.dimensions[0],(options?.segments||32))
    }
}