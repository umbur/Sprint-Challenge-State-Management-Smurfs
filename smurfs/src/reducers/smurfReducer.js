import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_POST_DATA_START
  } from '../actions';
  
  const initialState = {
    smurfs: [],
    //isLoading: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURF_DATA_START:
        return {
          ...state,
          //isLoading: true,
          error: ''
        };
      case FETCH_SMURF_DATA_SUCCESS:
        return {
          ...state,
         //isLoading: false,
          smurfs: action.payload,
          error: ''
        };
        case FETCH_POST_DATA_START:
            return {
              ...state,
             //isLoading: false,
              smurfs: action.payload,
              error: ''
            };
      default:
        return state;
    }
  };
  