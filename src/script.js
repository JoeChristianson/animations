import './style.css'
import * as THREE from "three"
import { randomCoords } from '../utils/randoms'
import { Cube } from '../objects/Cube'
import { Sphere } from '../objects/Sphere'

const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
}

const canvas = document.querySelector("canvas")
const scene = new THREE.Scene()
for(let i=0;i<1500;i++){
    const cube = new Sphere({dimensions:{x:.03},position:{x:[-20,20],y:[-20,20],z:[-20,20]},color:{x:[50,256],y:[50,256],z:[50,256]}})
    cube.render(scene)
}
    const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
    


camera.position.z = 15
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)