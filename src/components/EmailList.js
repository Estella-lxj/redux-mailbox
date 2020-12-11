import EmailItem from './EmailItem';
import './EmailList.css';


const EmailList = ({ filter, filteredEmails, setTime, setRead }) => {

    let emailList = [];

    if (filter === 'inbox') {
        emailList = filteredEmails.inbox;
    } else if (filter === 'sent') {
        emailList = filteredEmails.sent;
    } else if (filter === 'drafts') {
        emailList = filteredEmails.drafts;
    } else if (filter === 'trash') {
        emailList = filteredEmails.trash;
    };

    const handleSelect = (time) => {
        setTime(time);
        setRead(time);
    }


    return (

        <div className='list-container'>
            {(emailList.length) < 1 ? <div>It is Empty</div> : null}

            {emailList.map(({ from, subject, time, read }) => {
                return (
                    <div
                        key={time}
                        onClick={() => handleSelect(time)}
                    >
                        <EmailItem
                            from={from}
                            subject={subject}
                            time={time}
                            read={read}
                        />
                    </div>
                )
            })}

        </div >
    )
}

export default EmailList;