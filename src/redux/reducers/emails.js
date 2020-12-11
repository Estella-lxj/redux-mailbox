
const initialState = { data: [], isFetching: false, error: null }
const emails = (state = initialState, action) => {
    switch (action.type) {
        case ('FETCH_EMAIL_START'):
            return {
                ...state,
                isFetching: true
            };
        case ('FETCH_EMAIL_FAIL'):
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        case ('FETCH_EMAIL_SUCCESS'):
            return {
                ...state,
                isFetching: false,
                error: null,
                data: action.data.emailData,
            };
        case ('SET_READ_EMAIL'):
            let selectedEmail = state.data.filter(email => email.time === action.time)[0]
            let otherEmails = state.data.filter(email => email.time !== action.time)
            let updatedEmail = { ...selectedEmail, read: true }
            let newData = [...otherEmails, updatedEmail]
            return {
                ...state,
                isFetching: false,
                error: null,
                data: newData,
            };
        case ('DELETE_EMAIL'):
            let selectedEmailForDelete = state.data.filter(email => email.time === action.time)[0]
            let otherEmailsForDelete = state.data.filter(email => email.time !== action.time)
            let updatedEmailForDelete = { ...selectedEmailForDelete, tag: 'deleted' }
            let newDataForDelete = [...otherEmailsForDelete, updatedEmailForDelete]
            return {
                ...state,
                isFetching: false,
                error: null,
                data: newDataForDelete,
            };
        default:
            return state;
    }

}

export default emails;

