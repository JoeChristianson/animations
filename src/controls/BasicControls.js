import { state } from "../state"

export default class BasicControls{
    constructor(){
        this.enable()
        this.cursor = {}
        this.screenSize = state.screen.size
        this.mouseMoveControls = []
        this.wheelEvent = null;
        this.wheelControls = []
    }
    enable(){
        window.addEventListener("mousemove",(e)=>{
            this.cursor.x = e.clientX/this.screenSize.width-.5
            this.cursor.y = e.clientY/this.screenSize.height-.5
            if(!Array.isArray(this.mouseMoveControls)){
                return
            }
            this.control(this.mouseMoveControls)
        })
        window.addEventListener("wheel",(e)=>{
            this.wheelEvent = e
            if(!Array.isArray(this.wheelControls)){
                return
            }
            this.control(this.wheelControls)
        })
    }
    // this should be added to the action!
    control(controls){
        controls.forEach(c=>c(this))
    }
    addControl(controlType,controlName){
        this[controlType+"Controls"].push(this[controlName])
    }
    removeControl(controlName){
        this.mouseMoveControls=this.mouseMoveControls.filter(c=>c!==this[controlName])
    }
    xyCameraControl(controls){
        state.camera.position.x = controls.cursor.x*10
        state.camera.position.y = (state.camera.baseHeight||1)-controls.cursor.y*10
    }
    circleCameraControl(controls){
        state.camera.position.x = state.cameras.center[0]+Math.sin(controls.cursor.x*Math.PI*2)*state.cameras.zoom
        state.camera.position.z = state.cameras.center[2]+Math.cos(controls.cursor.x*Math.PI*2)*state.cameras.zoom
        state.camera.position.y = Math.max(state.cameras.minY,(state.camera.baseHeight||1)-controls.cursor.y*state.cameras.zoom*2)
    }
    zoom(controls){
        const delta = state.controls.wheelEvent.deltaY
        state.cameras.zoom= Math.max(state.cameras.zoom*(delta>50?1.5:.66),state.cameras.zoomMin)
        state.controls.mouseMoveControls[0](controls)
        }
}