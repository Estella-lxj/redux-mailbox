import axios from 'axios';

const requestStart = () => {
    return {
        type: 'FETCH_EMAIL_START'
    }
};

const requestFail = (e) => {
    return {
        type: 'FETCH_EMAIL_FAIL',
        error: e,
    }
};

const requestSuccess = (res) => {
    return {
        type: 'FETCH_EMAIL_SUCCESS',
        data: res.data,
    }
};

export const getData = (url) => {
    return (dispatch) => {
        dispatch(requestStart);
        axios.get(url)
            .then(
                res => dispatch(requestSuccess(res))
            ).catch(
                e => dispatch(requestFail(e))
            )
    }
};

export const setFilter = (text) => {
    return {
        type: 'SET_FILTER',
        filter: text,
    }
};

export const setTime = (text) => {
    return {
        type: 'SELECT_DETAIL_BY_TIME',
        time: text,
    }
};

export const unsetTime = () => {
    return {
        type: 'UNSET_TIME',
    }
};

export const setRead = (text) => {
    return {
        type: 'SET_READ_EMAIL',
        time: text,
    }
}

export const setDelete = (text) => {
    return {
        type: 'DELETE_EMAIL',
        time: text,
    }
}