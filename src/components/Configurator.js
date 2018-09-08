import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ConfiguratorBase from './ConfiguratorBase'
import ConfiguratorHeader from './ConfiguratorHeader'
import ConfiguratorSauce from './ConfiguratorSauce'
import ConfiguratorToppings from './ConfiguratorToppings'
import ConfiguratorDelivery from './ConfiguratorDelivery'

function Configurator(props) {
  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <ConfiguratorHeader {...props} />
      </Grid>
      <Grid item>
        <ConfiguratorBase {...props} />
      </Grid>
      <Grid item>
        {(props.selectedBase && <ConfiguratorSauce {...props} />)}
      </Grid>
      <Grid item>
        {(props.selectedSauce && <ConfiguratorToppings {...props} />)}
      </Grid>
      <Grid item>
        {(props.selectedToppings.length > 0 && <ConfiguratorDelivery {...props} />)}
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