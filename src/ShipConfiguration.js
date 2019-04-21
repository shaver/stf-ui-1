import React, { Component } from 'react';
import SlotGrid from './SlotGrid';
const SHIP_TYPES =  require('./ships.json');

class ShipConfiguration extends Component {
    constructor(props) {
        super(props);
    
        this.ship = SHIP_TYPES[this.props.shipId];
    }

    render() {
        return (
            <SlotGrid ship={this.ship}/>
        )
    }
}

export default ShipConfiguration;
