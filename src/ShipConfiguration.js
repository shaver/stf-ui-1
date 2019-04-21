import React, { Component } from 'react';
import SlotGrid from './SlotGrid';
import ShipStatus from './ShipStatus';
import Grid from '@material-ui/core/Grid';

const SHIP_TYPES =  require('./ships.json');

class ShipConfiguration extends Component {
    constructor(props) {
        super(props);
    
        this.ship = SHIP_TYPES[this.props.shipId];
    }

    render() {
        return (
            <Grid container spacing={0}>
                <Grid item xs={9}>
                    <SlotGrid ship={this.ship} />
                </Grid>
                <Grid item xs={2}>
                    <ShipStatus ship={this.ship} />
                </Grid>
            </Grid>
        );
    }
}

export default ShipConfiguration;
