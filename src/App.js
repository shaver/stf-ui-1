import React, { Component } from 'react';
import './App.css';
import ShipConfiguration from './ShipConfiguration';

const GAME_DATA = {
    SHIP_TYPES: require('./ships.json'),
    SHIP_COMPONENTS: require('./components.json'),
    SIZE_LETTERS: [null, 'S', 'M', 'L'],
}

class App extends Component {
    render() {
        return (
            <div>
                <ShipConfiguration initialShipType={this.props.shipType} GAME_DATA={GAME_DATA}/>
            </div>
        );
    }
}

export default App;
