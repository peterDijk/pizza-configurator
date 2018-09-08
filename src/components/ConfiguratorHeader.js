import React from 'react'
import { withStyles } from '@material-ui/core/styles'
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

export default withStyles(styles)(ConfiguratorHeader)