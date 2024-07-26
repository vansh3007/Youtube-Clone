import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware,compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import {thunk} from "redux-thunk";
import Reducers from "./Reducer";
import { GoogleOAuthProvider } from "@react-oauth/google";

const store = createStore(Reducers,compose(applyMiddleware(thunk)));



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="436676101154-jj7bu6d60ivt02384frim9pqs4g1mrgg.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </Provider>
);

