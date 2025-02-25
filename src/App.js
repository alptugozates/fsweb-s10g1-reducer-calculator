import React from 'react';
import { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { initialState } from './reducers';
import reducer from './reducers';
import {
  changeOperation,
  applyNumber,
  CLEAR_DISPLAY,
  MEMORY_ADD,
  CURRENT_MEMORY,
  RESET_MEMORY,
} from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number));
  }
  console.log("apply:", applyNumber)

  const handleOperationChanger = (operator) => {
    dispatch(changeOperation(operator));
  }

  const handleClearDisplay = () => {
    dispatch({ type: CLEAR_DISPLAY });
  }
  const handleMemoryAddition = () => {
    dispatch({ type: MEMORY_ADD });
  }
  const handleCurrentMemory = () => {
    dispatch({ type: CURRENT_MEMORY });
  }
  const resetMemoryHandler = () => {
    dispatch({ type: RESET_MEMORY });
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>

            <div className="row">
              <CalcButton onClick={handleMemoryAddition} value={"M+"} />
              <CalcButton onClick={handleCurrentMemory} value={"MR"} />
              <CalcButton onClick={resetMemoryHandler} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(1)} value={1} />
              <CalcButton onClick={() => handleApplyNumber(2)} value={2} />
              <CalcButton onClick={() => handleApplyNumber(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(4)} value={4} />
              <CalcButton onClick={() => handleApplyNumber(5)} value={5} />
              <CalcButton onClick={() => handleApplyNumber(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(7)} value={7} />
              <CalcButton onClick={() => handleApplyNumber(8)} value={8} />
              <CalcButton onClick={() => handleApplyNumber(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperationChanger("+")} value={"+"} />
              <CalcButton onClick={() => handleOperationChanger("*")} value={"*"} />
              <CalcButton onClick={() => handleOperationChanger("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClearDisplay} value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
