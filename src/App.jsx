import React, {Component} from 'react';

class App extends Component {
    render() {
        let { count,onAdd,onSub} = this.props;
        return (
            <div>
                  <h3>App组件</h3>
                <p>{count}</p>
                <button onClick={()=>{
                    onAdd()
                }}>+</button>
                <button onClick={onSub}>-</button>
            </div>
        );
    }
}

export default App;