import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
const SHIP_COMPONENTS = require('./components.json');
const SIZE_LETTERS = [null, "S", "M", "L"];

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    shipName: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 16,
        width: 300,
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 75,
        width: 75,
    },
});

class SlotGrid extends Component {
    constructor(props) {
        super(props);
        const { classes, ship } = props;
        this.classes = classes;
        this.ship = ship;
        this.default_components = {"S": [], "M": [], "L": []};
        for (let i = 0; i < ship.default_components.length; i++) {
            let comp = SHIP_COMPONENTS[ship.default_components[i]];
            this.default_components[SIZE_LETTERS[comp.size]].push(comp);
        }
    }

    renderSlotRow(size) {
        let slots = [];
        let size_comps = this.default_components[SIZE_LETTERS[size]];
        for (let i = 0; i < size_comps.length; i++) {
            let label = SIZE_LETTERS[size] + (i + 1);
            slots.push(
                <Grid item container key={label} xs={1}>
                    <Paper className={this.classes.paper}>
                        {label}: {size_comps[i].id}
                    </Paper>
                </Grid>
            );
        }
        return (
            <Grid container item justify="center" spacing={8} xs={12}>
                {slots}
            </Grid>
        );
    }

    render() {
        const classes = this.classes;
        return (
            <div>
                <Grid container spacing={16} justify="center">
                    <Grid item container justify="center" key="shipName" xs={8}>
                        <div className={classes.shipName}>
                        {this.props.ship.name}
                        </div>
                    </Grid>
                    {this.renderSlotRow(3)}
                    {this.renderSlotRow(2)}
                    {this.renderSlotRow(1)}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(SlotGrid);