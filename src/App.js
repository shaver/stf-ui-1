import React, { Component } from 'react';
import './App.css';
import ShipConfiguration from './ShipConfiguration';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {shipId: 7};
    }

    render() {
        return (
            <div>
                <ShipConfiguration shipId={this.state.shipId}/>
            </div>
        );
    }
}

export default App;
