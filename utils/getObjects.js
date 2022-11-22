export const getObjectById = (objects,_id)=>{
    return getObjectsByProperties(objects,{_id})
}

export const getObjectsByProperties = (objects,properties)=>{
    let result;
    for (let type in objects){
        objects[type].forEach(object => {
            if (checkIfAllPropertiesMatch(object,properties)){
                result = object
            }
        });
    }
    return result
}

export const checkIfAllPropertiesMatch=(element,properties)=>{
    for (let key in properties){
        if(element[key]!==properties[key]){
            return false
        }
    }
    return true
}