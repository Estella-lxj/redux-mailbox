import './Category.css';


const Category = ({ filteredEmails, setFilter }) => {


    return (
        <div className='category-container'>
            <div className='category-new'>New Email</div>
            <div className='category-btn-group'>
                <button onClick={() => setFilter('inbox')}>
                    Inbox ({filteredEmails.inbox.length})
            </button>
                <button onClick={() => setFilter('sent')}>
                    Sent  ({filteredEmails.sent.length})
            </button>
                <button onClick={() => setFilter('drafts')}>
                    Drafts  ({filteredEmails.drafts.length})
            </button>
                <button onClick={() => setFilter('trash')}>
                    Trash  ({filteredEmails.trash.length})
            </button>
            </div>
        </div>
    )
}

export default Category;