import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

class ShipStatus extends Component {
  renderStatusRow(i, label, current, max) {
    return (
      <tr key={i}>
        <td>{label}:</td>
        <td>{current}</td>
        <td>/</td>
        <td className={this.props.classes.statusMaxCell}>{max}</td>
      </tr>
    )
  }

  renderStatusTable() {
    const reduceComponents = (field) => {
      let current = 0;

      const reduceWrapper = (prev, curr) => {
        let after = prev + curr[field];
        console.log('reduceComponents: ', prev, ' + ', curr.name, '.', field, ' = ', after, ' (', after - prev, ')');
        return after;
      }

      for (let size of Object.values(this.props.components)) {
        current = size.reduce((p, c) => reduceWrapper(p, c), current);
      }

      return current;
    }

    const baseShip = this.props.GAME_DATA.SHIP_TYPES[this.props.shipType];
    const list = [
      ["Mass", reduceComponents("mass"), reduceComponents("drive_mass")],
      ["Crew", reduceComponents("holds_crew"), baseShip.max_crew],
      ["Officers", reduceComponents("holds_officer"), baseShip.max_officer],
      ["Craft", reduceComponents("holds_craft"), baseShip.max_craft],
    ];

    const rows = [];

    for (let i = 0; i < list.length; i++) {
      rows.push(this.renderStatusRow(i + 1, list[i][0], list[i][1], list[i][2]));
    }

    return (
      <table>
        <tbody>
          {list.map((item, idx) => this.renderStatusRow(idx + 1, item[0], item[1], item[2]))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <Grid item>
        <Paper className={this.props.classes.statusTable}>
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