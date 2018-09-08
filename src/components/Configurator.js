import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
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
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item>
            <Card className={classes.headerCards}>
              <CardContent>
                <ConfiguratorHeader {...props} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.headerCards}>
              <CardContent>
                {(props.selectedToppings.length > 0 && <ConfiguratorDelivery {...props} />)}
                {(!props.selectedToppings.length > 0 && <img src="/favicon.ico" alt="" />)}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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

    </Grid>
  )
}

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 0,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  expansionPanel: {
    width: '80vw'
  },
  topText: {
    marginTop: 20
  },
  headerCards: {
    width: 350,
    height: 100,
    marginTop: 20,
    margin: 'auto'
    // padding: 0
  }
})

export default withStyles(styles)(Configurator)