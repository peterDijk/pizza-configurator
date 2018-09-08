import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function ConfiguratorSauce(props) {
  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
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

export default withStyles(styles)(ConfiguratorSauce)