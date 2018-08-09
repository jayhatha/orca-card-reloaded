import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class PassSelect extends React.Component {
  state = {
    pass: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  function getMonth() {
    var d = new Date();
    var month = new Array();
    month[0] = "JAN";
    month[1] = "FEB";
    month[2] = "MAR";
    month[3] = "APR";
    month[4] = "MAY";
    month[5] = "JUN";
    month[6] = "JUL";
    month[7] = "AUG";
    month[8] = "SEP";
    month[9] = "OCT";
    month[10] = "NOV";
    month[11] = "DEC";
    var n = month[d.getMonth()];
    var y = d.getFullYear().toString().split('').splice(2, 2).join('')
    return n + y
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="secret">Secret Question</InputLabel>
          <Select
            id="select-bar"
            value={this.state.pass}
            onChange={this.handleChange}
            inputProps={{
              name: 'pass',
              id: 'pass',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'All-Day PugetPass $3.50'}>All-Day PugetPass $3.50 ($8.00)</MenuItem>
            <MenuItem value={'PugetPass ' + {this.getMonth()} + ' $2.75'}>PugetPass $2.75 ($99.00)</MenuItem>
            <MenuItem value={'PugetPass ' + {this.getMonth()} + ' $3.25'}>PugetPass $3.25 ($117.00)</MenuItem>
            <MenuItem value={'PugetPass ' + {this.getMonth()} + ' $4.50'}>PugetPass $4.50 ($162.00)</MenuItem>
            <MenuItem value={'PugetPass ' + {this.getMonth()} + ' $5.25'}>PugetPass $5.25 ($189.00)</MenuItem>
            <MenuItem value={'PugetPass ' + {this.getMonth()} + ' $10.00'}>PugetPass $10.00 ($360.00)</MenuItem>
            <MenuItem value={'WSF Vashon Island Ferry ' + {this.getMonth()}}>WSF Vashon Island Ferry $10.00 ($360.00)</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

PassSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PassSelect);
