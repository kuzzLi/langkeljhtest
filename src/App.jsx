import React, {Component} from 'react';
import { connect } from 'react-redux';
import { add,sub } from './actions';
class App extends Component {
    render() {
        let { count,dispatch} = this.props;
        return (
            <div>
                  <h3>App组件</h3>
                <p>{count}</p>
                <button onClick={()=>{
                    dispatch(add())
                }}>+</button>
                <button onClick={()=>{
                    dispatch(sub())
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