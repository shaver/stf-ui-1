import React, { Component } from 'react';
import SlotGrid from './SlotGrid';
import ShipStatus from './ShipStatus';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

class ShipConfiguration extends Component {
    constructor(props) {
        super(props);
    
        const { initialShipType } = props;
        this.state = { shipType: initialShipType } ;
        this.pickShip = this.pickShip.bind(this);
    }

    renderShipSelector() {
        return (
            <select onChange={this.pickShip} value={this.state.shipType}>
                {
                    this.props.GAME_DATA.SHIP_TYPES.map((s) => {
                        return s.id ? <option key={'ship' + s.id} value={s.id}>{s.name}</option> : '';
                    })
                }
            </select>
        );
    }

    pickShip(event) {
        this.setState({ shipType: parseInt(event.target.value) });
        console.log("selected ship " + event.target.value);
    }

    render() {
        // Fill component list from ship type's defaults.
        const components = {'S': [], 'M': [], 'L': []};
        const pShip = this.props.GAME_DATA.SHIP_TYPES[this.state.shipType];

        for (let i = 0; i < pShip.default_components.length; i++) {
            let comp = this.props.GAME_DATA.SHIP_COMPONENTS[pShip.default_components[i]];
            components[this.props.GAME_DATA.SIZE_LETTERS[comp.size]].push(comp);
        }

        return (
            <Grid container spacing={0}>
                <Grid item container justify='center' key='shipName' xs={10}>
                    <div className={this.props.classes.shipName}>
                        {this.renderShipSelector()}
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <SlotGrid shipType={this.state.shipType}
                        components={components}
                        GAME_DATA={this.props.GAME_DATA}
                    />
                </Grid>
                <Grid item xs={2}>
                    <ShipStatus shipType={this.state.shipType}
                        components={components}
                        GAME_DATA={this.props.GAME_DATA}
                    />
                </Grid>
            </Grid>
        );
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    shipName: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.primary,
        height: 16,
        width: 300,
        marginBottom: theme.spacing.unit,
    },
});

export default withStyles(styles)(ShipConfiguration);
