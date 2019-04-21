import React, { Component } from 'react';
import SlotGrid from './SlotGrid';
import ShipStatus from './ShipStatus';
import Grid from '@material-ui/core/Grid';

class ShipConfiguration extends Component {
    constructor(props) {
        super(props);
    
        const { shipType, components, GAME_DATA } = props;
        this.state = { shipType, components, GAME_DATA };
    }

    render() {
        return (
            <Grid container spacing={0}>
                <Grid item xs={9}>
                    <SlotGrid shipType={this.state.shipType}
                        components={this.state.components}
                        GAME_DATA={this.state.GAME_DATA}
                    />
                </Grid>
                <Grid item xs={2}>
                    <ShipStatus shipType={this.state.shipType}
                        components={this.state.components}
                        GAME_DATA={this.state.GAME_DATA}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default ShipConfiguration;
