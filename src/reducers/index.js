import { FETCH_SMURF_LOADING, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILED, ADD_SMURF } from './../actions/index'



export const initialState = {
    smurfs: [
        { 
        description: "",
        id: "",
        name: "",
        nickname: "",
        position: "",
        }
    ],
    isLoading: false,
    error: '',
    
}

const reducer = (state=initialState, action)=>{
    console.log("state", state)
    console.log("action", action)
    switch(action.type){
        case(FETCH_SMURF_LOADING):
            return({
            ...state,
            isLoading: true,
            }
        )
            //CASE FOR SUCCESSFUL API
        case(FETCH_SMURF_SUCCESS):
            return ({
                ...state,
                smurfs: action.payload,
                isLoading: false,
                }
            )
        case(FETCH_SMURF_FAILED):
            return ({
                ...state,
                error: action.payload,
                isLoading: false,
            })
        case(ADD_SMURF):
            return ({
                ...state,
                smurfs: [...state.smurfs, 
                    {
                        description: action.payload,
                        id: action.payload,
                        name: action.payload,
                        nickname: action.payload,
                        position: action.payload,
    
                    }],
                    //action.payload may only give one piece of data. I may need to add each object inside of here... or in the action.  
                    
            })    
        case("ADD_SMURF_ERROR"):
            return ({
                ...state,
                error: action.payload
            })     
        
        default:
            return state
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.