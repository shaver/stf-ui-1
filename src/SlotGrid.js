import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

class SlotGrid extends Component {
    renderSlotRow(size) {
        let slots = [];
        let letter = this.props.GAME_DATA.SIZE_LETTERS[size]
        let size_comps = this.props.components[letter];
        for (let i = 0; i < size_comps.length; i++) {
            let label = letter + (i + 1);
            slots.push(
                <Grid item container key={label} xs={1}>
                    <Paper className={this.props.classes.slot}>
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
                {this.renderSlotRow(3)}
                {this.renderSlotRow(2)}
                {this.renderSlotRow(1)}
            </Grid>
        );
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    slot: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.primary,
        height: 75,
        width: 75,
    },
});

export default withStyles(styles)(SlotGrid);