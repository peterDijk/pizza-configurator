import {OPTIONS_LOADED} from '../actions/options'

export default (state = null, action = {}) => {
  switch (action.type) {
    case OPTIONS_LOADED:
      return action.payload
    default: 
      return state
  }
}