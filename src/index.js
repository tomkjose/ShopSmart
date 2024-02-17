import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App/App";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
