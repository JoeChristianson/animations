import { Object } from "./Object";
import * as THREE from "three"

export class Cube extends Object{
    constructor({dimensions,position,color,rotation,mesh}){
        super({dimensions,position,color,rotation})
        this.mesh = null;
        this.geometry = new THREE.BoxGeometry(...this.dimensions)
    }
}