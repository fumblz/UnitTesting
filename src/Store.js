import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/root";
const DEV_TOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [thunk];
const initialState = {};
const Store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    DEV_TOOLS
  )
);

export default Store;
