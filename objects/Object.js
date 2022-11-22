import { randomCoords } from "../utils/randoms";
import * as THREE from "three"
import { state } from "../src/state";
import { getLocationByObjectId } from "../utils/getLocation";
import { checkWithinDistance } from "../utils/distance";

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
        this.currentMovement = null;
        this.ticks = 0;
        this.direction = [0,0,0]
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
    act(){
        if(this.currentMovement){
            this.currentMovement()
        }
        this.animate()
        this.ticks++
    }
    animate(){
        console.log("animating");
        this.mesh.scale.set(...this.dimensions)
        this.mesh.position.set(...this.position)
        this.mesh.rotation.set(...this.rotation)
    }
    addMovement(movement){
        this.currentMovement = this[movement]
    }
    unsetMovement(){
        this.currentMovement = null
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
    moveToTarget(_id,dimensions){
        this.target = getLocationByObjectId(state.objects,_id)
        if(dimensions===2){
            this.direction[0]=this.target[0]-this.position[0]
            this.direction[1]=0
            this.direction[2]=this.target[2]-this.position[2]
        }
        this.velocity = .001
        this.addMovement("simpleMovement")
    }
    simpleMovement(){
        this.position = this.position.map((coord,index)=>coord+this.direction[index]*this.velocity)
        if(checkWithinDistance(this.position,this.target,1,{dimensions:2})){
            console.log("we have arrived!");
            this.unsetMovement("simpleMovement")
        }
    }
    setSimpleMovement(direction,velocity){
        this.direction = direction;
        this.velocity = velocity;
        this.unsetMovement()
        this.addMovement("simpleMovement")
    }
}