import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register, Picture } from "./Components";
import { Landing, Debug, Home } from "./Pages";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import man from './Assets/images/man.jpeg';
import balloon from './Assets/images/balloon.jpg';

const pictureProps = {
	author: {
		name: "Richard",
		avatar: man,
	},
	title: "Balloon",
	src: balloon,
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />}>
							<Route index element={<Landing />} />
							<Route path="home" element={<Home />} />
						</Route>
						<Route path="/debug" element={<Debug component={<Picture {...pictureProps} />} />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("app-root")
);
