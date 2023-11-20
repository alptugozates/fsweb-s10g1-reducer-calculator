import React from 'react';
import { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { initialState } from './reducers';
import reducer from './reducers';
import { CHANGE_OPERATION, addOne, applyNumber } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSonuc = (e) => {
    dispatch(applyNumber((Number(e.target.value))));
  }
  const handleIslem = (e) => {
    dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={0} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> X</span>
              <span id="memory"><b>Memory:</b> 0</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={(e) => handleSonuc(e)} value={1} />
              <CalcButton onClick={(e) => handleSonuc(e)} value={2} />
              <CalcButton onClick={(e) => handleSonuc(e)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={(e) => handleSonuc(e)} value={4} />
              <CalcButton onClick={(e) => handleSonuc(e)} value={5} />
              <CalcButton onClick={(e) => handleSonuc(e)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={(e) => handleSonuc(e)} value={7} />
              <CalcButton onClick={(e) => handleSonuc(e)} value={8} />
              <CalcButton onClick={(e) => handleSonuc(e)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={(e) => handleIslem} value={"+"} />
              <CalcButton onClick={(e) => handleIslem} value={"*"} />
              <CalcButton onClick={(e) => handleIslem} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
