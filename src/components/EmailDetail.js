import './EmailDetail.css';


const EmailDetail = ({ time, emails, setDelete, unsetTime }) => {

    let selectedEmail = {}
    let arr = emails.filter(email => email.time === time);
    if (arr.length > 0) selectedEmail = arr[0]

    const handleDelete = (time) => {
        setDelete(time);
        unsetTime();
    }



    return (

        <div className='detail-container'>

            <div className='detail-header'>
                <h3 className='detail-subject'>{selectedEmail.subject}</h3>
                <span className='detail-from'>{selectedEmail.from}</span>
                <span className='detail-time'>{selectedEmail.time}</span>
                <button className='detail-delete-btn' onClick={() => handleDelete(time)} >Delete x</button>
            </div>
            <div className='detail-body'>
                <p>{selectedEmail.message}</p>
            </div>

        </div>
    )
}

export default EmailDetail;