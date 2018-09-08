import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormGroup from '@material-ui/core/FormGroup'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Configurator(props) {
  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography className={classes.topText}>CHOOSE YOUR PIZZA INGREDIENTS</Typography>
        <Typography>Total price: {props.totalPrice}</Typography>
      </Grid>
      <Grid item>
      <ExpansionPanel className={classes.expansionPanel} expanded={props.expanded === 'panel1'} onChange={props.handleExpansionChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Pizza base {(props.selectedBase) ? `- ${props.selectedBase.name} ${props.selectedBase.size}` : ''}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" />
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item>
      <ExpansionPanel className={classes.expansionPanel} expanded={props.expanded === 'panel2'} onChange={props.handleExpansionChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Sauces {(props.selectedSauce) ? `- ${props.selectedSauce.name}` : ''}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" />
              <RadioGroup
                aria-label="sauce"
                name="sauce"
                className={classes.group}
                value={props.sauceValue.toString()}
                onChange={props.handleChange}
                
                > 
                {props.sauceOptions.map(sauce => <FormControlLabel key={sauce.id} value={sauce.id.toString()} control={<Radio />} label={`${sauce.name} - ${sauce.price.toFixed(2)}`} />)}
              </RadioGroup>
            </FormControl>
            </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

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

export default withStyles(styles)(Configurator)