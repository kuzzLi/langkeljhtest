import React, {Component} from 'react';
import { connect } from 'react-redux';
class App extends Component {
    render() {
        let { count,dispatch} = this.props;
        return (
            <div>
                  <h3>App组件</h3>
                <p>{count}</p>
                <button onClick={()=>{
                    dispatch({type:'add'})
                }}>+</button>
                <button onClick={()=>{
                    dispatch({type:'sub'})
                }}>-</button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        count:state
    }
}
export default connect(mapStateToProps)(App);