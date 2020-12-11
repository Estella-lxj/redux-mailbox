import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/action-creators';
import Category from './components/Category';
import EmailList from './components/EmailList';
import EmailDetail from './components/EmailDetail';

function App(props) {

  useEffect((() => {
    props.getEmails('http://api.haochuan.io/emails');
  }), [])

  const sortTime = (e1, e2) => {
    let str1 = e1.time
    let str2 = e2.time
    let t1 = new Date(str1).getTime();
    let t2 = new Date(str2).getTime();
    return t2 - t1
  }

  const emails = props.emails.data.sort(sortTime);

  let filteredEmails = {};
  filteredEmails['inbox'] = emails.filter(email => email.tag === 'inbox');
  filteredEmails['sent'] = emails.filter(email => email.tag === 'sent');
  filteredEmails['drafts'] = emails.filter(email => email.tag === 'drafts');
  filteredEmails['trash'] = emails.filter(email => email.tag === 'deleted');

  return (
    <div className="App">

      <Category
        filteredEmails={filteredEmails}
        setFilter={props.setFilter}
      />

      <EmailList
        filter={props.filter}
        filteredEmails={filteredEmails}
        setTime={props.setTime}
        setRead={props.setRead}
      />
      {props.time ? <EmailDetail
        emails={emails}
        time={props.time}
        unsetTime={props.unsetTime}
        setDelete={props.setDelete}
      /> : null}


    </div>
  );
}

const mapStateToProps = state => {
  return {
    emails: state.emails,
    filter: state.filter,
    time: state.time,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getEmails: url => dispatch(actions.getData(url)),
    setFilter: text => dispatch(actions.setFilter(text)),
    setTime: text => dispatch(actions.setTime(text)),
    unsetTime: () => dispatch(actions.unsetTime()),
    setRead: text => dispatch(actions.setRead(text)),
    setDelete: text => dispatch(actions.setDelete(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
