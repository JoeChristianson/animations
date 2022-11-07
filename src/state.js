export const state = {
    lastTick:null,
    isOn:false,
    clock:null,
    get elapsed(){
        return this.clock.getElapsedTime()
    }
}