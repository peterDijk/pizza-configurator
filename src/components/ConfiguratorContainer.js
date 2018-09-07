import React from 'react'
import {connect} from 'react-redux'
import {loadOptions} from '../actions/options'

class ConfiguratorContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadOptions()
  }

  render() {
    return null
  }

}






const mapStateToProps = (state) => {
  return {
    options: state.options
  }
}

// proptypes!

export default connect(mapStateToProps, {loadOptions})(ConfiguratorContainer)