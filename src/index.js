import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth/authProvider";
import { Provider } from "react-redux";
import { store } from "./slices";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={store}>
   <BrowserRouter>
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
 </Provider>
);
