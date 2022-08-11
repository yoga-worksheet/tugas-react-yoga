import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./Components/ClassComponent";
import { FunctionalComponent } from "./Components/FunctionalComponent";

function App() {
	return (
		<div className="App">
			<ClassComponent />
			<FunctionalComponent />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
