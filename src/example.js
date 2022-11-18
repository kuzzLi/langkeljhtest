import {legacy_createStore as createStore} from 'redux'

const reducer=(state=0,action)=>{
    // console.log("reducer");
    switch(action.type){
        case 'add':
            return state+1;
        case 'sub':
            return state-1;
        default:
            return state;
    }
}
const store=createStore(reducer);
console.log("store中state初始值",store.getState());
// store.dispatch({type:"add"});
// console.log(store.getState());
// store.dispatch({type:"add"});
// console.log(store.getState());
// store.dispatch({type:"add"});
// console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({type:"add"});
store.dispatch({type:"add"});
store.dispatch({type:"add"});
store.dispatch({type:"sub"});


