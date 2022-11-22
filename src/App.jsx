import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as type from './actions';
import User from './store/components/user';
// import { bindActionCreators } from 'redux';
const mapStateToProps=(state)=>{
    return{
        counter:state.count
    }
}
@connect(mapStateToProps,type)
class App extends Component {
    render() {
        let { counter,add,sub} = this.props;
        // console.log(this.props);
        return (
            <div>
                  <h3>App组件</h3>
                <p>{counter.count}</p>
                <button onClick={()=>{
                    add()
                }}>+</button>
                <button onClick={()=>{
                    sub()
                }}>-</button>
                <User></User>
            </div>
        );
    }
}

// const mapDispatchToProps=(dispatch,props)=>{
    // return bindActionCreators({add,sub},dispatch)
        // return{
            // add:()=>dispatch(add()),
        // sub:()=>dispatch(sub())
        // }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App);
// export default connect(mapStateToProps,{add,sub})(App);
// export default connect(mapStateToProps,type)(App);
export default App;