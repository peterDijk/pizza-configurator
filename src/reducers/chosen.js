import {UPDATE_CHOSEN} from '../actions/chosen'

const initialState = {
  base: null,
  sauce: null,
  toppings: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CHOSEN:
      return action.payload
    default: 
      return state
  }
}