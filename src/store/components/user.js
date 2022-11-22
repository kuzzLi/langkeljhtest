import React from 'react'
import { connect } from 'react-redux'
import { get_user } from '../../actions'
const User=(props)=> {
    let {get_user}=props
    let {isLoading,user,error}=props.user
    let data
    if(isLoading){
        data='Loading...'
    }else if(error){
        data=error
    }else{
        data=user.email
    }
  return (
    <div>{data}
    <button onClick={()=>{
        get_user()
    }}>获取email</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps,{get_user})(User)
