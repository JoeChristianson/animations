import { randomCoords } from "../utils/randoms";
import * as THREE from "three"

export class Object{
    constructor({dimensions,position,color,rotation}){
        this.dimensions = dimensions?randomCoords(dimensions,null,{array:true}):[1,1,1]
        this.position = position?randomCoords(position,null,{array:true}):[0,0,0]
        this.color = color?randomCoords(color,null,{array:true,round:true}):[255,255,255];
        this.rotation = rotation?randomCoords(rotation,null,{array:true}):[0,0,0]
        this.material = new THREE.MeshBasicMaterial()
    }
    render(scene){
        const material = new THREE.MeshBasicMaterial({color:"red"})
        const mesh = new THREE.Mesh(this.geometry,material)
        const color = new THREE.Color(`rgb(${this.color[0]},${this.color[1]},${this.color[2]})`)
        material.color = color
        mesh.position.set(...this.position)
        this.mesh = mesh
        scene.add(mesh)
    }
    animate(){
        this.mesh.scale.set(...this.dimensions)
        this.mesh.position.set(...this.position)
        this.mesh.rotation.set(...this.rotation)
    }
}