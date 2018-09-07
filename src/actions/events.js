import request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const CLEANUP_EVENT = 'CLEANUP_EVENT'
export const EVENT_CREATE_SUCCES = 'EVENT_CREATE_SUCCES'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'
export const EVENT_UPDATE_SUCCES = 'EVENT_UPDATE_SUCCES'


function eventsFetched(events) {
  return {
    type: EVENTS_FETCHED,
    payload: events
  }
}


function eventFetched(event) {
  return {
    type: EVENT_FETCHED,
    payload: event
  }
}

export function cleanupEvent() {
  return {
    type: CLEANUP_EVENT
  }
}

function eventCreateSucces(event) {
  return {
    type: EVENT_CREATE_SUCCES,
    payload: event
  }
}


function eventDeleteSucces(id) {
  return {
    type: EVENT_DELETE_SUCCESS,
    payload: id
  }
}


const updateEventSucces = (event) => {
  return {
    type: EVENT_UPDATE_SUCCES,
    payload: event
  }
}

export function createEvent(event) {
  return function (dispatch) {
    request
      .post(`${baseUrl}/events`)
      .send(event)
      .then(response => {
        dispatch(eventCreateSucces(response.body))
      })
      .catch(console.error)
  }
}

export function loadEvents() {
  return (dispatch, getState) => {
    // when the state allready contains events, don't fetch them
    if (getState().events) return

    // a GET /events request
    request(`${baseUrl}/events`)
      .then(response => {
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(eventsFetched(response.body))
      })
      .catch(console.error)
  }
}

export const loadEvent = (id) => (
  (dispatch) => {
    request
      .get(`${baseUrl}/events/${id}`)
      .then(response => {
        dispatch(eventFetched(response.body))
      })
  }
)

export const updateEvent = (id, event) => dispatch => {
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(event)
    .then(response => {
      dispatch(updateEventSucces(response.body))
    })
}

export function deleteEvent(id) {
  return function (dispatch) {
    request
      .delete(`${baseUrl}/events/${id}`)
      .then(response => {
        dispatch(eventDeleteSucces(id))
      })
  }
}