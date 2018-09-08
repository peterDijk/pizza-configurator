import React from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

function ConfiguratorDelivery(props) {
  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Turbo Drone Delivery (+ 10%)</FormLabel>
            <FormGroup > 
              <FormControlLabel
                control={
                <Checkbox checked={props.turboDelivery} name="turboDelivery" value="turboDelivery" onChange={props.handleChange} />
                }
                label="Yes please"
                />
              </FormGroup>
            </FormControl>
      </Grid>
    </Grid>
  )
}



export default ConfiguratorDelivery