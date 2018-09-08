import React from 'react'
import {connect} from 'react-redux'
import {loadOptions} from '../actions/options'
import {updateChosen} from '../actions/chosen'
import Configurator from './Configurator'

class ConfiguratorContainer extends React.PureComponent {
  state = {
    base: 0,
    sauce: 0,
    toppings: [],
    total: 0.00
  }

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: parseInt(event.target.value, 0) })
    
    this.props.updateChosen({
      ...this.state, 
      [event.target.name]:parseInt(event.target.value, 0),
      // total: 
      
    })
  }

  calculateTotal = () => {
    let total = 0
    if (this.state.base !== 0) {
      const base = this.props.options.bases.find(base => base.id === this.state.base)
      total += base.price
    }
    if (this.state.sauce !== 0) {
      const sauce = this.props.options.sauces.find(sauce => sauce.id === this.state.sauce)
      total += sauce.price
    }
    this.setState({...this.state, total})
  }

  componentDidMount() {
    this.props.loadOptions()
    // load all toppings in this.state: object with toppings as keys, values false. Checkbox sets to true
  }

  componentDidUpdate() {
      this.calculateTotal()
      this.props.updateChosen({
        ...this.state
      })
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
        sauceValue={this.state.sauce}
        toppingsValue={this.state.toppings}
        totalPrice={this.state.total}
        />
    )
  }

}

const mapStateToProps = (state) => {
  return {
    options: state.options,
    // chosen: state.chosen
  }
}

// proptypes!

export default connect(mapStateToProps, {loadOptions, updateChosen})(ConfiguratorContainer)