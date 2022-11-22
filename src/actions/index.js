import { ADD,SUB,LOAD_USER} from '../constants'
import axios from 'axios';
export const add = (data)=>{
    console.log("action function add");
    return dispatch=>{
        setTimeout(()=>{//模拟异步
             dispatch({type:ADD})
        },2000);
    }
}

export const sub = ()=>{
    return {
        type:SUB
    }
}

export const get_user = ()=>{
    return {
        type:LOAD_USER,//action type操作类型前缀
        payload:axios.get("https://randomuser.me/api")
    }
}
