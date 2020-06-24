import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import axios from "axios";
import Navbar from "./components/Navbar";
import rootSaga from "./sagas";
import rootReducers from "./reducers";
import Weather from "./containers/Weather";
import Settings from "./containers/Settings";
axios.defaults.withCredentials = true;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/settings" component={Settings} />
          <Route path="/" component={Weather} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
