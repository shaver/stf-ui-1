import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

class ShipStatus extends Component {
    constructor(props) {
        super(props);

        this.ship = props.ship;
        this.classes = props.classes;
    }

    renderStatusRow(label, current, max) {
        return (
            <tr>
                <td>{label}:</td>
                <td>{current}</td>
                <td>/</td>
                <td className={this.classes.statusMaxCell}>{max}</td>
            </tr>
        )
    }

    renderStatusTable() {
        const list = [];
        
        list.push(["Mass", 1500, 1800]);
        list.push(["Crew", 24, 30]);
        list.push(["Officers", 4, 5]);

        const rows = [];
        for (let i of list) {
            rows.push(this.renderStatusRow(i[0], i[1], i[2]));
        }

        return (
            <table>
                {rows}
            </table>
        );
    }

    render() {
        const classes = this.classes;
        return (
            <Grid item spacing={8}>
                <Paper className={classes.statusTable}>
                    {this.renderStatusTable()}
                </Paper>
            </Grid>
        );
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    statusTable: {
        padding: theme.spacing.unit,
        color: theme.palette.text.primary,
    },
    statusMaxCell: {
        color: theme.palette.text.secondary,
    }
});

export default withStyles(styles)(ShipStatus);