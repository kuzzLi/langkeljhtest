const CountReducer=(prevState=0,action={})=>{
    let newState=prevState
    switch(action.type){
        case "add":
            newState++
        return newState
        case 'sub':
            newState--
            return newState
         default:
            return prevState   
    }
}
export default CountReducer