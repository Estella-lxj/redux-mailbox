import './EmailItem.css';


const EmailItem = ({ from, subject, time, read }) => {


    return (

        <div className='list-item-container'>
            <p className='list-item-subject'>{subject}</p>
            <span className='list-item-from'>{from}</span>
            <span className='list-item-time'>{time.slice(0, time.indexOf(' '))}</span>
            {read === "false" ? <span className='list-item-dot'>.</span> : null}
        </div>


    )

}

export default EmailItem;