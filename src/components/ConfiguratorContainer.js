import React from 'react'
import {connect} from 'react-redux'
import {loadOptions} from '../actions/options'
import Configurator from './Configurator'

class ConfiguratorContainer extends React.PureComponent {
  state = {
    base: '',
    sauce: '',
    toppings: []
  }

  handleChange = event => {
    this.setState({ [event.target.name]: parseInt(event.target.value, 0) })
  }

  componentDidMount() {
    this.props.loadOptions()
  }

  componentDidUpdate() {
    console.log(this.state)
  }



  render() {
    if (!this.props.options) return 'Loading...'
    return (
      <Configurator 
        baseOptions={this.props.options.bases} 
        sauceOptions={this.props.options.sauces}
        toppingOptions={this.props.options.toppings}
        handleChange={this.handleChange}
        baseValue={this.state.base}
        />
    )
  }

}






const mapStateToProps = (state) => {
  return {
    options: state.options
  }
}

// proptypes!

export default connect(mapStateToProps, {loadOptions})(ConfiguratorContainer)