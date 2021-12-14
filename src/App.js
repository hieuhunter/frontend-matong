import { Provider } from "react-redux";
import React from "react";
import Routes from "./Router";

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
export default App;
  