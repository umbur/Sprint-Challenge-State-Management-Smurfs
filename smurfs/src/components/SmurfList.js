import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
//import Loader from 'react-loader-spinner';

import { getData } from '../actions';

//import Smurf from './Smurf';

const SmurfList = props => {
    console.log('props from SmurfList', props)
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
          setData(res.data);
          console.log('data from useEffect:', res.data)
        })
        .catch(err => console.log(err.response));
      }, []);
  return (
    <div>
        <h1>Smurf Data:</h1>
        {data.map(n => {
            return(
                <>
                <p>Name: {n.name}</p>
                <p>Age: {n.age}</p>
                 <p>Height: {n.height}</p>
                </>
            ) 
        })}
      </div>
  )
}

const mapStateToProps = state => {
    console.log('state from SmurfList', state)
  return {
    //isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);
