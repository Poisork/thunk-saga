import React from 'react'; 
import './App.css';
import {connect} from 'react-redux'
import {fetchDog} from './redux/dispatch'

function App(props) { 
  return (
    <div>
      <button onClick={() => props.dispatch(fetchDog())}>Show Dog</button>
        {props.loading 
          ? <p>Loading...</p> 
          : props.error
              ? <p>Error, try again</p>
              : <p><img alt='Dog if you fetch him' style={{width: '500px',height: '500px',objectFit: 'cover', borderRadius: '50%'}} src={props.url}/></p>}
  </div>
  );
}

export default connect((state) => {
  console.log(state);
  return state;
})(App);
