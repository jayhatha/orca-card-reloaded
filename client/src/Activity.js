import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3DA5D9',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontFamily: '"Roboto", sans-serif',
    marginLeft: '3px',
    marginRight: '3px'
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 600,
    minWidth: 300,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    overflowY: 'auto'
  },
  table: {
    minWidth: 300,
    maxWidth: 600
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(cardId, route, amount) {
  id += 1;
  return { id, cardId, route, amount};
}

const data = [
  createData('12500987', 62, '$2.75'),
  createData('12500987', 26, '$2.75'),
  createData('12500987', 28, '$2.75'),
  createData('12500987', 5, '$2.75'),
  createData('12500987', 62, '$2.75')
];

function Activity(props) {
  const { classes } = props;

  return (
    <div className="card-activity">
    <h1>Your Card Activity</h1>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell numeric>Card Number</CustomTableCell>
            <CustomTableCell numeric>Route</CustomTableCell>
            <CustomTableCell numeric>Amount</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <CustomTableCell numeric>{n.cardId}</CustomTableCell>
                <CustomTableCell numeric>{n.route}</CustomTableCell>
                <CustomTableCell numeric>{n.amount}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </div>
  );
}

Activity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Activity);
