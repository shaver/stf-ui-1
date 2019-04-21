import React, { Component } from 'react';
import './App.css';
import ShipConfiguration from './ShipConfiguration';

const GAME_DATA = {
    SHIP_TYPES: require('./ships.json'),
    SHIP_COMPONENTS: require('./components.json'),
    SIZE_LETTERS: [null, 'S', 'M', 'L'],
}

class App extends Component {
    constructor(props) {
        super(props);

        const { shipType } = props;

        // Fill component list from ship type's defaults.
        const components = {'S': [], 'M': [], 'L': []};
        const pShip = GAME_DATA.SHIP_TYPES[shipType];

        for (let i = 0; i < pShip.default_components.length; i++) {
            let comp = GAME_DATA.SHIP_COMPONENTS[pShip.default_components[i]];
            components[GAME_DATA.SIZE_LETTERS[comp.size]].push(comp);
        }

        this.state = { shipType, components }
    }

    render() {
        return (
            <div>
                <ShipConfiguration shipType={this.state.shipType}
                    components={this.state.components}
                    GAME_DATA={GAME_DATA}/>
            </div>
        );
    }
}

export default App;
