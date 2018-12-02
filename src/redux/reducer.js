import * as actionType from './action_type'

const defaultState = {
    language: "chi"
}

const reducer = (state = defaultState, action = {}) => {
    switch(action.type){
        case actionType.CHANGELAN: 
            return {
                ...state,
                language:action.language
            }
        case actionType.CHANGEID:
            return {
                ...state,
                id:action.id
            }
        case actionType.CHANGEKEYWORD:
            return {
                ...state,
                keyword:action.keyword
            }
        default:
            return state
    }
}

export default reducer