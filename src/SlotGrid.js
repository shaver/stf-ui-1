import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

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
    },
    slot: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.primary,
        height: 75,
        width: 75,
    },
});

class SlotGrid extends Component {
    constructor(props) {
        super(props);
        const { classes, shipType, components, GAME_DATA } = props;
        this.state = { classes, shipType, components, GAME_DATA };
    }

    renderSlotRow(size) {
        let slots = [];
        let letter = this.state.GAME_DATA.SIZE_LETTERS[size]
        let size_comps = this.state.components[letter];
        for (let i = 0; i < size_comps.length; i++) {
            let label = letter + (i + 1);
            slots.push(
                <Grid item container key={label} xs={1}>
                    <Paper className={this.state.classes.slot}>
                        {label}: {size_comps[i].id}
                    </Paper>
                </Grid>
            );
        }
        return (
            <Grid container item justify='center' spacing={8} xs={12}>
                {slots}
            </Grid>
        );
    }

    render() {
        return (
            <Grid container spacing={16} justify='center'>
                <Grid item container justify='center' key='shipName' xs={8}>
                    <div className={this.state.classes.shipName}>
                        {this.state.GAME_DATA.SHIP_TYPES[this.state.shipType].name}
                    </div>
                </Grid>
                {this.renderSlotRow(3)}
                {this.renderSlotRow(2)}
                {this.renderSlotRow(1)}
            </Grid>
        );
    }
}

export default withStyles(styles)(SlotGrid);