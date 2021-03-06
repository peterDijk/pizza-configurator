import React from 'react'
import {connect} from 'react-redux'
import {loadOptions} from '../actions/options'
import {updateChosen} from '../actions/chosen'
import Configurator from './Configurator'

class ConfiguratorContainer extends React.PureComponent {
  state = {
    base: 0,
    sauce: 0,
    turboDelivery: false,
    total: 0.00,
    toppings: {},
    expanded: 'panel1'
  }

  handleChange = event => {
    let value
    if (event.target.name === 'turboDelivery') {
      value = event.target.checked
    } else {
      value = parseInt(event.target.value, 0)
    }
    this.setState({ 
      ...this.state, 
      [event.target.name]: value 
    })
  }

  handleToppingsChange = name => event => {
      this.setState({ 
        ...this.state, 
        toppings: {...this.state.toppings, [name]: event.target.checked }
      })
  }

  handleExpansionChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
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
    if (this.state.turboDelivery === true) {
      total += ((total / 100) * 10)
    }
    total = total.toFixed(2)

    this.setState({...this.state, total})
  }

  chosenToppingsToArray = () => {
    const toppings = Object.keys(this.state.toppings)
    return toppings.filter(topping => this.state.toppings[topping] === true )
  }

  toppingsDisabled = () => {
    if (this.chosenToppingsToArray().length > 2) {
      return true
    } else {
      return false
    }
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
      this.calculateTotal() // only executes after toppings are loaded otherwise it overwrites toppings setState
    }

    const chosenToppings = this.chosenToppingsToArray()
    
    const forRedux = {...this.state, chosenToppings}
    delete forRedux.toppings
    delete forRedux.expanded
    this.props.updateChosen(forRedux)
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
        turboDelivery={this.state.turboDelivery}
        toppingsDisabled={this.toppingsDisabled()}
        selectedBase={this.props.options.bases.find(base => base.id === this.state.base)}
        selectedSauce={this.props.options.sauces.find(sauce => sauce.id === this.state.sauce)}
        selectedToppings={this.chosenToppingsToArray()}
        handleExpansionChange={this.handleExpansionChange}
        expanded={this.state.expanded}
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.options
  }
}

export default connect(mapStateToProps, {loadOptions, updateChosen})(ConfiguratorContainer)