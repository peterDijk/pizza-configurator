import jsonOptions from '../pizza-options.json'

export const OPTIONS_LOADED = 'OPTIONS_LOADED'


function optionsLoaded(options) {
  return {
    type: OPTIONS_LOADED,
    payload: options
  }
}

export function loadOptions() {
  return function (dispatch) {
    // dispatch setup for possible later async db fetch
    dispatch(optionsLoaded(jsonOptions.options))
  }
}