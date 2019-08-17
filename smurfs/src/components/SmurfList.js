import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
//import Loader from 'react-loader-spinner';

import { getData } from '../actions';

const SmurfList = props => {
    console.log('props from SmurfList', props)
    useEffect(() => {
      props.getData()
    }, [])
  return (
    <div>
        <h1>Smurf Data:</h1>
        {props.smurfs.map(n => {
            return(
                <>
                <p>Smurf Name: {n.name}</p>
                <p>Smurf Age: {n.age}</p>
                <p>Smurf Height: {n.height}</p>
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
