import { ADD,SUB } from "../../constants"
const CountReducer=(prevState={count:0},action={})=>{
    let newState={...prevState}
    switch(action.type){
        case ADD:
            newState.count++
        return newState
        case SUB:
            newState.count--
            return newState
         default:
            return prevState   
    }
}
export default CountReducer