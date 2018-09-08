import React from 'react'
import {connect} from 'react-redux'
import {loadOptions} from '../actions/options'
import {updateChosen} from '../actions/chosen'
import Configurator from './Configurator'

class ConfiguratorContainer extends React.PureComponent {
  state = {
    base: 0,
    sauce: 0,
    toppings: {},
    total: 0.00
  }

  handleChange = event => {
    this.setState({ 
      ...this.state, 
      [event.target.name]: parseInt(event.target.value, 0) 
    })
  }

  handleToppingsChange = name => event => {
    this.setState({ 
      ...this.state, 
      toppings: {...this.state.toppings, [name]: event.target.checked }
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
    if (Object.keys(this.state.toppings).length > 0) {
      const toppings = Object.keys(this.state.toppings)
      const chosenToppings = toppings.filter(topping => this.state.toppings[topping] === true )
      total += (chosenToppings.length * 0.5)
    }



    this.setState({...this.state, total})
  }

  componentDidMount = () => {
    this.props.loadOptions()
  }

  componentDidUpdate = () => {
    if (this.props.options && this.props.options.toppings.length !== 0 && Object.keys(this.state.toppings).length === 0) {
      // load all toppings in this.state: object with toppings as keys, values false. Checkbox sets to true
      let toppingsObj = {}
      this.props.options.toppings.forEach(topping => {
        toppingsObj = {
          ...toppingsObj,
          [topping]: false
        }
      })
      this.setState({
        ...this.state,
        toppings: toppingsObj
      })
      
    }
    
    if (Object.keys(this.state.toppings).length !== 0) {
      this.calculateTotal() // only executes after toppings are loaded otherwise it overwrites line 46 setState
    }
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
        handleToppingsChange={this.handleToppingsChange}
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
    options: state.options
  }
}

// proptypes!

export default connect(mapStateToProps, {loadOptions, updateChosen})(ConfiguratorContainer)