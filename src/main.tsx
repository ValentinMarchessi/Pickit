import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register } from "./Components";
import { Landing, Debug, Home } from "./Pages";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />}>
							<Route index element={<Landing />} />
							<Route path="home" element={<Home/>}/>
						</Route>
						<Route path="/debug" element={<Debug component={<Login/>} />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
