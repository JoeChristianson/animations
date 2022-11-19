import Subscene from "./SubSceneClass"

const enter = ()=>{
    const line = CSSRulePlugin.getRule("#title .h1Cont::before")
    const titleText = CSSRulePlugin.getRule(".reveal")
    const tl = gsap.timeline()
    tl.to(line, {delay:.6,duration:2.4,cssRule:{scaleX:1}})
    tl.to(titleText, {duration:1,delay:0, cssRule:{clipPath:'polygon(0 0,100% 0, 100% 100%, 0 100%)'}},"-=2")
    tl.to(titleText, {duration:2,delay:0, cssRule:{opacity:1}},"-=2")
}

const exit = ()=>{
    const line = CSSRulePlugin.getRule("#title .h1Cont::before")
    const titleText = CSSRulePlugin.getRule(".reveal")
    const tl = gsap.timeline()
    tl.to(line, {delay:.6,duration:1,cssRule:{scaleX:0}})
    tl.to(titleText, {duration:1,delay:0, cssRule:{clipPath:'polygon(0 0,100% 0, 100% 0, 0 0)'}},"-=2")
    tl.to(titleText, {duration:1,delay:0, cssRule:{opacity:0}},"-=2")
}

const titleSubscene = new Subscene("title",enter,exit)
export default titleSubscene