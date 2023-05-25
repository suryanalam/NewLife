import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./components/Login_Context/LoginContext";  // => context provider

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<LoginProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</LoginProvider>
	</React.StrictMode>
);
