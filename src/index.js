import React from 'react';
import ReactDOM from 'react-dom';
import {legacy_createStore as createStore} from 'redux'
import App from './App'


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
let render=()=>{
    ReactDOM.render(
        <App count={store.getState()}
             onAdd={()=>store.dispatch({type:"add"})}
             onSub={()=>store.dispatch({type:"sub"})}
        />,
        document.getElementById("app")
    )
}
render();
store.subscribe(()=>{
    render();
    console.log("state",store.getState());
})