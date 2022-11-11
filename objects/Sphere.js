import { Object } from "./Object";
import * as THREE from "three"

export class Sphere extends Object{
    constructor({type,dimensions,position,color,rotation,mesh,shadow,_id,texture}){
        super({texture,type,dimensions:{x:dimensions?.x||null,y:dimensions?.x||null,z:dimensions?.x||null},position,color,rotation,shadow,_id})
        this.mesh = null;
        this.geometry = new THREE.SphereGeometry(this.dimensions[0])
    }
    roll(){

    }
}