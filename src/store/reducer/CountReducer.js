import { ADD,SUB } from "../../constants"
const CountReducer=(prevState=0,action={})=>{
    let newState=prevState
    switch(action.type){
        case ADD:
            newState++
        return newState
        case SUB:
            newState--
            return newState
         default:
            return prevState   
    }
}
export default CountReducer