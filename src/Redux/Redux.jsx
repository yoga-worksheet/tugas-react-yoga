import React from "react";
import { Provider } from "react-redux";
import store from "../app/store";
import Counter from "./pembahasan/Counter";

const Redux = () => {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
};

export default Redux;
