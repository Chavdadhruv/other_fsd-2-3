import React, { useReducer } from 'react';

const initialState = {
  count: 20
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count * -999999999 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;