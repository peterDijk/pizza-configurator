import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

function Configurator(props) {
  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography>CHOOSE YOUR PIZZA INGREDIENTS</Typography>
        <Typography>Total price: {props.totalPrice}</Typography>
      </Grid>
      <Grid item>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Pizza base</FormLabel>
            <RadioGroup
              aria-label="base"
              name="base"
              className={classes.group}
              value={props.baseValue.toString()}
              onChange={props.handleChange}
              > 
              {props.baseOptions.map(base => <FormControlLabel key={base.id} value={base.id.toString()} control={<Radio />} label={`${base.name} - ${base.size} - ${base.price}`} />)}
            </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Sauces</FormLabel>
              <RadioGroup
                aria-label="sauce"
                name="sauce"
                className={classes.group}
                value={props.sauceValue.toString()}
                onChange={props.handleChange}
                > 
                {props.sauceOptions.map(sauce => <FormControlLabel key={sauce.id} value={sauce.id.toString()} control={<Radio />} label={`${sauce.name} - ${sauce.price}`} />)}
              </RadioGroup>
            </FormControl>
      </Grid>
    </Grid>
  )
}


const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
})

export default withStyles(styles)(Configurator)