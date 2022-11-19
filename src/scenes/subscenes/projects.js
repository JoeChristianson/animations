import Subscene from "./SubSceneClass"
import * as THREE from "three"
import {TTFLoader} from "three/examples/jsm/loaders/TTFLoader"
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { sceneStart } from "../rollin";
import { state } from "../../state";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
import fontJSON from "../../../fonts/droid_sans_mono_regular.typeface.json"

let tl;

const enter = async ()=>{



    const text = CSSRulePlugin.getRule("#projects > h1")
    const starWars = CSSRulePlugin.getRule(".star-wars")
    tl = gsap.timeline()
    tl.to(starWars, {duration:1,delay:0, cssRule:{opacity:0}})
    tl.to(text, {duration:4,delay:1, cssRule:{scale:2.5}},"-=1")
    tl.to(text, {duration:4,delay:0, cssRule:{marginTop:"100px"}},"-=1")
    const font = new Font(fontJSON)
    const textGeometry = new TextGeometry( "Project One", {
        size: 100,
        height: 100,
        curveSegments: 12,
        font,  
        bevelThickness: 2,
        bevelSize: 5,
        bevelEnabled: true
    });
    var textMaterial = new THREE.MeshNormalMaterial();
    const textMesh = new THREE.Mesh(textGeometry,textMaterial);
    textMesh.position.set(0,5,-100) ;
    textMesh.castShadow = true;
    textMesh.receiveShadow = true;
    textMesh.position.set(0,50,-1000)
    textMesh.rotation.set(0,Math.PI/10,0)
    state.scene.add(textMesh)
    state.cameras.unfollow()
    state.controls.removeControl("mouseMove","circleCameraControl")
    state.controls.addControl("mouseMove","rotateCameraControl")
}

const exit = ()=>{
    tl.kill()
}

const projectsSubscene = new Subscene("about",enter,exit)
export default projectsSubscene