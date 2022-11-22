import { randomCoords } from "../utils/randoms";
import * as THREE from "three"
import { state } from "../src/state";

export class Object{
    constructor({texture,type,dimensions,position,color,rotation,shadow,_id}){
        if(_id==="target"){
            console.log(position)
        }
        this._id = _id;
        this.type = type
        this.texture = texture
        this.randomVal = Math.random();
        this.startingDimensions = dimensions?randomCoords(dimensions,null,{array:true}):[1,1,1]
        this.dimensions = dimensions&&dimensions?.x?randomCoords(dimensions,null,{array:true}):[1,1,1]
        this.startingPosition = position?randomCoords(position,null,{array:true}):[0,0,0];
        this.position = position?randomCoords(position,null,{array:true}):[0,0,0]
        this.color = color?randomCoords(color,null,{array:true,round:true}):[150,0,255];
        this.rotation = rotation?randomCoords(rotation,null,{array:true}):[0,0,0]
        this.material = new THREE.MeshBasicMaterial();
        this.shadow = shadow?true:false;
        this.target = null;
    }
    render(scene,options){
        if(this._id==="target"){
            console.log(this)
        }
        let material
        let texture;
        if(this.texture){
            texture = new THREE.TextureLoader().load(`/assets/${this.texture}`)
        }
        if(!this.shadow){
            material = new THREE.MeshBasicMaterial ({map:texture})
        }
        else{
            material = new THREE.MeshPhongMaterial ({map:texture})
        }
        const mesh = new THREE.Mesh(this.geometry,material)
        const color = new THREE.Color(`rgb(${this.color[0]},${this.color[1]},${this.color[2]})`)
        material.color = color
        mesh.position.set(...this.position)
        mesh.rotation.set(...this.rotation)
        this.mesh = mesh
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true
        state.objects[(this.type||"static")].push(this)
        scene.add(mesh)
    }
    animate(){
        this.mesh.scale.set(...this.dimensions)
        this.mesh.position.set(...this.position)
        this.mesh.rotation.set(...this.rotation)
    }
    set positionZ(num){
        this.position[2] = num
    }
    set positionX(num){
        this.position[0] = num
    }
    set positionY(num){
        this.position[1] = num
    }
    moveTo(_id){
        
    }
}