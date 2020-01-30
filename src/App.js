import React from 'react'; 
import './App.css';
import {connect} from 'react-redux'
import {fetchDog} from './redux/actions'
import {Star} from './Components/Default'
function App(props) { 
  return (
    <div>
      <Star />
      <button onClick={() => props.dispatch(fetchDog())}>Show Dog</button>
        {props.loading 
          ? <p>Loading...</p> 
          : props.error
              ? <p>Error, try again</p>
              : <p><img alt='Dog if you fetch him' style={{width: '500px',height: '500px',objectFit: 'cover', borderRadius: '50%'}} src={props.url}/></p>}
    </div>
  );
}

export default connect(store => store)(App);
