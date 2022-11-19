import { Object } from "./Object";
import * as THREE from "three"

export class Cube extends Object{
    constructor(options){
        super(options)
        this.mesh = null;
        this.geometry = new THREE.BoxGeometry(...this.dimensions)
    }
}