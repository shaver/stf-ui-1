import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

class ShipStatus extends Component {
    constructor(props) {
        super(props);

        const { classes, shipType, components, GAME_DATA } = props;
        this.state = { classes, shipType, components, GAME_DATA };
    }

    renderStatusRow(i, label, current, max) {
        return (
            <tr key={i}>
                <td>{label}:</td>
                <td>{current}</td>
                <td>/</td>
                <td className={this.state.classes.statusMaxCell}>{max}</td>
            </tr>
        )
    }

    renderStatusTable() {
        const reduceComponents = (fn, start) => {
            let current = start;
    
            const reduceWrapper = (f, prev, curr) => {
                let after = f(prev, curr);
                console.log("reduceComponents: ", prev, " + ", curr.name, " = ", after, " (",
                    after - prev, ")");
                return after;
            }

            for (let size of Object.values(this.state.components)) {
                current = size.reduce((p, c) => reduceWrapper(fn, p, c), current);
            }
    
            return current;
        }
    
        const list = [];

        let currentMass = reduceComponents((prev, curr) => prev + curr.mass, 0);
        let maxMass = reduceComponents((prev, curr) => prev + curr.drive_mass, 0);
        list.push(["Mass", currentMass, maxMass]);

        let currentCrew = reduceComponents((prev, curr) => prev + curr.holds_crew, 0);
        let maxCrew = this.state.GAME_DATA.SHIP_TYPES[this.state.shipType].max_crew;
        list.push(["Crew", currentCrew, maxCrew]);

        let currentOfficers = reduceComponents((prev, curr) => prev + curr.holds_officer, 0);
        let maxOfficers = this.state.GAME_DATA.SHIP_TYPES[this.state.shipType].max_officer;
        list.push(["Officers", currentOfficers, maxOfficers]);

        let currentCraft = reduceComponents((prev, curr) => prev + curr.holds_craft, 0);
        let maxCraft = this.state.GAME_DATA.SHIP_TYPES[this.state.shipType].max_craft;
        list.push(["Craft", currentCraft, maxCraft]);
        
        const rows = [];

        for (let i = 0; i < list.length; i++) {
            rows.push(this.renderStatusRow(i + 1, list[i][0], list[i][1], list[i][2]));
        }

        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <Grid item>
                <Paper className={this.state.classes.statusTable}>
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