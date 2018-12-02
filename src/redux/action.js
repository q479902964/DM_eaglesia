import * as actionType from './action_type';

export const changeLan = (language) => {
    return {
        type: actionType.CHANGELAN,
        language
    }
}

export const changeID = (id) => {
    return {
        type: actionType.CHANGEID,
        id
    }
}

export const changeKey = (keyword) => {
    return {
        type: actionType.CHANGEKEYWORD,
        keyword
    }
}

export default {}