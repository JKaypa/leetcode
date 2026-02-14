type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    if(Array.isArray(obj)){
        if(!obj.length){
            return true;
        }
        return false
    } else if(!Object.keys(obj).length){
        return true;
    }

    return false;
};