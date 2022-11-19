import './style.css'
import * as THREE from "three"
import {state} from './state'
import { textures,sceneStart,action } from './scenes/rollin'
import { tick } from '../utils/time'
import BasicControls from './controls/BasicControls'
import { getAllTextureFileNames } from './textureMethods/getAllTextureFileNames'

const main = async ()=>{

    getAllTextureFileNames("a")
    state.clock = new THREE.Clock()
    state.screen.fitScreen()
    state.dom.addCanvas()
    state.scene = new THREE.Scene()
    state.cameras.addCamera({height:2})
    // state.lights.addLight()
    state.lights.addLight("point",{position:[2,2,2],intensity:.9})
    const controls = new BasicControls()
    controls.addControl("mouseMove","circleCameraControl")
    controls.addControl("wheel","scrollScenes")
    state.controls = controls
    
    // then add Renderer
    
    const renderer = new THREE.WebGLRenderer({canvas:state.dom.canvas})
    renderer.setSize(state.screen.size.width,state.screen.size.height)
    renderer.shadowMap.enabled = true
    const object = sceneStart(state.scene)
    renderer.render(state.scene,state.camera)
    const date = new Date()
    state.lastTick = date.getTime()
    tick(()=>action(object,state.scene),renderer,state.scene,state.camera)
}

main()