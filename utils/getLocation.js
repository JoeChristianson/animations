import { getObjectById } from "./getObjects"

export const getLocationByObjectId = (objects,_id)=>{
    const object = getObjectById(objects,_id)
    return object.position
}