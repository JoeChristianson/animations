import './style.css'
import * as THREE from "three"
import {state} from './state'
import { basicAnimation,basicAction } from './scenes/basicAnimation'
import { tick } from '../utils/time'

const clock = new THREE.Clock()
state.clock = clock
const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
}
const canvas = document.querySelector("canvas")
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
state.camera = camera
camera.position.z = 4
state.scene = scene
scene.add(camera)
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width,sizes.height)
const object = basicAnimation(scene)
renderer.render(scene,camera)
const date = new Date()
state.lastTick = date.getTime()
tick(()=>basicAction(object,scene),renderer,scene,camera)