export const combineReducer=(reducer)=>{//{ count:CountReducer, user:UserReducer}
    return function (state={},action){
        let newState={}
        Object.keys(reducer).forEach(item=>{
            let childState=state[item]
            newState[item]=reducer[item](childState,action)
        })
        return newState
    }
}
// const rootReducer=combineReducer({
//     count:CountReducer,
//     user:UserReducer
// })