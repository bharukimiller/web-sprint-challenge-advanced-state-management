import axios from 'axios';

export const FETCH_SMURF_LOADING ="FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch(fetchSmurfLoading());

        axios.get('http://localhost:3333/smurfs')
        .then((resp)=>{
            console.log('response', resp)
            // dispatch(fetchSmurfSuccess())
            
        })
        .catch((err)=>{
            // dispatch(fetchSmurfFailed())
        })
    }
}


export const fetchSmurfLoading = () => {
    return ({ type: FETCH_SMURF_LOADING })
}

export const fetchSmurfSuccess = ( smurfs) => {
    return ({ type: FETCH_SMURF_SUCCESS, payload: smurfs })
}

export const fetchSmurfFailed = (failmsg) => {
    return ({ type: FETCH_SMURF_FAILED, payload: failmsg })
}

export const addSmurf = (newSmurf) => {
    return ({ type: ADD_SMURF, payload: newSmurf })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.