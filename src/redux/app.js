import utils from '../utils'

const initialState = {
  user: utils.cache.get('user') || {}
}

export const types = {
  LOGIN:'APP/LOGIN',
  LOGOUT:'APP/LOGOUT'
}

export const actions = {
  [types.LOGIN](){
    return {type:types.LOGIN}
  },
  [types.LOGOUT](){
    return {type:types.LOGOUT}
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOGIN :
      utils.cache.set('user', action.app.user)
      return {user:action.app.user}
    case types.LOGOUT:
      utils.cache.set('user', {})
      return {user:{}}
    default: return state
  }
}
