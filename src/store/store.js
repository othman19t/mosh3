import { createStore } from "redux";
import { reducer } from "./auth";
import { devToolsEnhancer } from "redux-devtools-extension"; // npm i --save-dev redux-devtools-extension

export const store = createStore(reducer, devToolsEnhancer({ trace: true }));
