import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function ConfiguratorToppings(props) {
  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
      <ExpansionPanel className={classes.expansionPanel} expanded={props.expanded === 'panel3'} onChange={props.handleExpansionChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Toppings {(props.selectedToppings) ? props.selectedToppings.map(topping => `- ${topping} `) : ''}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend"/>
            <FormGroup>
              
                {props.toppingOptions.map(topping => {
                  return (
                    <FormControlLabel
                      key={topping}
                      control={
                      <Checkbox 
                        checked={props.toppingsValue[topping]} 
                        value={topping} 
                        onChange={props.handleToppingsChange(topping)} 
                        disabled={((props.toppingsDisabled === true && props.toppingsValue[topping] === false) ? true : false)}
                        />
                      }
                      label={topping}
                      />
                  )  
                })}
              </FormGroup>
              <FormHelperText>(3 max - 0,50 each)</FormHelperText>
            </FormControl>
            </ExpansionPanelDetails>
      </ExpansionPanel>
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
  expansionPanel: {
    width: '80vw'
  },
  topText: {
    marginTop: 20
  }
})

export default withStyles(styles)(ConfiguratorToppings)