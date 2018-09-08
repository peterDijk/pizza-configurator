import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function ConfiguratorHeader(props) {
  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography className={classes.topText}>CHOOSE YOUR PIZZA INGREDIENTS</Typography>
        <Typography>Total price: {props.totalPrice}</Typography>
      </Grid>
    </Grid>
  )
}


export default ConfiguratorHeader