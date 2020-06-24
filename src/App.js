import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { store } from "./store/store";
import * as actions from "./store/auth";

store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugRemoved(1));
store.dispatch(actions.bugAdded("bug 2"));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
