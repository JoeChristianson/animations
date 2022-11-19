import { Sphere } from "../../objects/Sphere"

export const starz = (scene)=>{
    for(let i=0;i<1500;i++){
        const cube = new Sphere({dimensions:{x:.03},position:{x:[-20,20],y:[-20,20],z:[-20,20]},color:{x:[50,256],y:[50,256],z:[50,256]}})
        cube.render(scene)
    }
}