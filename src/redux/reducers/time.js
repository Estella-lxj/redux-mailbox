const time = (state = '', action) => {
    switch (action.type) {
        case ('SELECT_DETAIL_BY_TIME'):
            return action.time;
        case ('UNSET_TIME'):
            return '';
        default:
            return state;
    }
}

export default time;