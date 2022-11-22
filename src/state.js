import * as THREE from "three"
import subscenes from "./scenes/subscenes"

export const state = {
    cameras:{
        cameras:[],
        addCamera:(options)=>{
            const camera = new THREE.PerspectiveCamera(75,state.screen.size.width/state.screen.size.height)
            camera.position.set(0,options?.height||0,5)
            state.cameras.cameras.push(camera)
            state.scene.add(camera)
        },
        follow(newTracked,options){
            if(newTracked){
                state.cameras.tracked = newTracked
            }
            if(options?.shift){
                state.cameras.xLookShift = options.shift.x
                state.cameras.yLookShift = options.shift.y
                state.cameras.zLookShift = options.shift.z
            }
            if(state.cameras.tracked){
                const lookShifts = [state.cameras.xLookShift||0,state.cameras.yLookShift||0,state.cameras.zLookShift||0]
                const positions = state.cameras.tracked.position.map((p,i)=>{
                    return p+lookShifts[i]
                })
                state.camera.lookAt(...positions)
                state.cameras.center = positions
            }
        },
        unfollow(){
            state.cameras.tracked = null
        },
        freeze:false,
        setFreeze(boolean){
            state.cameras.freeze = boolean
        },
        zoom:5,
        zoomMin:2.5,
        minY:1,
        tracked:null,
        center:[0,0,0]
    },
    controls:null
    ,
    lights:{
        lights:[],
        addLight:(type,options)=>{
            let light;
            if(type==="directional"){
                light = new THREE.DirectionalLight(0x55ff00, 0.7)
                light.position.set(0,5,2)
            }
            else if(type==="point"){
                light = new THREE.PointLight(0xdddddd, options?.intensity||.5)
                light.position.set(...options.position)
            }
            else if (type==="spotlight"){
                light = new THREE.SpotLight(0xdddddd)
                light.position.set(...options.position)
            }
            else{
                light = new THREE.AmbientLight(0xffffff,.1)
            }
            light.castShadow = true
            state.lights.lights.push(light)
            state.scene.add(light)
        }
    },
    objects:{
        static:[],
        moving:[],
        players:[]
    }
    ,
    scene:null,
    subscenes,
    screen:{
        size:null,
        fitScreen:(options)=>{
            let height =1
            if(options?.height){
                height = options.height
            }
            state.screen.size = {
                width:window.innerWidth,
                height:window.innerHeight*height
            };
        },
        getYCenter(){
            return window.scrollY+window.innerHeight/2
        }
    },
    sceneWindows:{
        currentSceneIndex:0,
       className:"scene",
       list:document.querySelectorAll(".scene"),
       getCenters(){
            const centers = []
            state.sceneWindows.list.forEach(scene=>{
                centers.push(scene.offsetTop+scene.clientHeight/2)
            })
            return centers
       }
    },
    textures:{},
    topography:{
        ground:{
            height:0
        }
    }, 
    dom:{
        canvas:null,
        addCanvas:()=>{
            state.dom.canvas = document.querySelector("canvas")
        }
    },
    lastTick:null,
    isOn:false,
    clock:null,
    get camera(){
        return state.cameras.cameras[0]
    },
    get light(){
        return state.lights.lights[0]
    },
    get elapsed(){
        return this.clock.getElapsedTime()
    },



    add:{
        axesHelper(length){
            const axesHelperObj = new THREE.AxesHelper(length||1)
            state.scene.add(axesHelperObj)
        }
    }
    
}