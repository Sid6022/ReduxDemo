import actionType from './ActionTypes'



export function EnableDarkMode(bool) {
    return {
      type: actionType.SET_THEME_DATA,
      isDarkmode : bool
    }
  }