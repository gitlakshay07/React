import React, { useReducer } from 'react'

const initialState = {count : 0};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state , count: state.count + 1};
        case "decrement":
            if(state.count > 0) return {...state , count: state.count - 1};
        case "reset":
            return {...state, count: 0}
        default:
            return state;
    }
}

const Usereducer = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: "increment"})}>+Inc</button>  
        <button onClick={() => dispatch({type: "decrement"})}>- Dec</button>  
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>  
    </div>
  )
}

export default Usereducer