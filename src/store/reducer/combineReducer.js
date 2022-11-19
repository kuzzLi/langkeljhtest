export const combineReducer=(reducer)=>{
    return function (state={},action){
        let newState={}
        Object.keys(reducer).forEach(item=>{
            let childState=state[item]
            newState[item]=reducer[item](childState,action)
        })
        return newState
    }
}