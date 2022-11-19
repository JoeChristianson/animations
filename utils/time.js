import {state} from "../src/state"
export const tick = (cb,renderer,scene,camera)=>{
    cb()
    renderer.render(scene,camera)
    const date = new Date()
    state.lastTick = date.getTime()
    window.requestAnimationFrame(()=>tick(cb,renderer,scene,camera))
}

export const delta = ()=>{
    const date = new Date()
    return date.getTime()-state.lastTick
}