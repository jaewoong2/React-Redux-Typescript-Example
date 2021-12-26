import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { State } from "./state/reducers";

const App = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawtMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawtMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
};

export default App;
