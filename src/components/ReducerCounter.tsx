import React, { useReducer } from 'react';
import { TCounterActions } from '../types/TCounterActions';

const initialState = {
  counter: 0,
};

const reducerCounter = (
  state: typeof initialState,
  action: TCounterActions
) => {
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        counter: state.counter + 1,
      };

    case 'decrementar':
      return {
        ...state,
        counter: state.counter - 1,
      };

    case 'custom':
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
};

const ReducerCounter = () => {
  const [{ counter }, dispatch] = useReducer(reducerCounter, initialState);

  return (
    <div>
      <p>Counter: {counter} </p>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: 'incrementar' })}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: 'decrementar' })}
      >
        -1
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: 'custom', payload: 100 })}
      >
        set 100
      </button>
    </div>
  );
};

export default ReducerCounter;
