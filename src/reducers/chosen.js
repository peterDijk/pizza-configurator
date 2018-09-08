import {UPDATE_CHOSEN} from '../actions/chosen'

const initialState = {
  base: 0,
  sauce: 0,
  toppings: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CHOSEN:
      return action.payload
    default: 
      return state
  }
}