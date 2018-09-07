export const UPDATE_CHOSEN = 'UPDATE_CHOSEN'

export function updateChosen(pizzaObj) {
  return {
    type: UPDATE_CHOSEN,
    payload: pizzaObj
  }
}