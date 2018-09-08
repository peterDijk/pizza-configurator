import React from 'react'
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

function ConfiguratorBase(props) {
  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
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
    </Grid>
  )
}

export default ConfiguratorBase