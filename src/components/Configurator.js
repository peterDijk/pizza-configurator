import React from 'react'
import Grid from '@material-ui/core/Grid'
import ConfiguratorBase from './ConfiguratorBase'
import ConfiguratorHeader from './ConfiguratorHeader'
import ConfiguratorSauce from './ConfiguratorSauce'
import ConfiguratorToppings from './ConfiguratorToppings'
import ConfiguratorDelivery from './ConfiguratorDelivery'

function Configurator(props) {
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item>
            <ConfiguratorHeader {...props} />
          </Grid>
          <Grid item>
            {(props.selectedToppings.length > 0 && <ConfiguratorDelivery {...props} />)}
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

export default Configurator