import actionType from '../action/ActionTypes';


const INITIAL_STATE = {
    isDarkMode: false,
}


export default function appReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionType.SET_THEME_DATA:
            return{
                ...state,
                isDarkMode: action.data,
            }
    }
}
 