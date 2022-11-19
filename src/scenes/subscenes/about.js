import Subscene from "./SubSceneClass"

let tl;
const starWars = document.querySelector(".star-wars")
const enter = ()=>{
    const text = CSSRulePlugin.getRule(".star-wars")
    tl = gsap.timeline()
    tl.to(text, {duration:1,delay:0, cssRule:{opacity:1}})
    tl.to(text, {duration:50,delay:0, cssRule:{top:"-600px",scale:.5}},"-=1")
    tl.to(text,{duration:10,cssRule:{opacity:0}},"-=10")
}

const exit = ()=>{
    tl.kill()
}

const aboutSubscene = new Subscene("about",enter,exit)
export default aboutSubscene