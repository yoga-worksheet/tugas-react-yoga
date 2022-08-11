import React, { Component } from "react";

class ClassComponent extends Component {
	state = {
		count: 0,
	};

	incrementHandler = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};
	decrementHandler = () => {
		if (this.state.count > 0)
			this.setState((prevState) => ({ count: prevState.count - 1 }));
	};

	render() {
		return (
			<div id="class-component" className="card">
				<h2>Hello dari class component</h2>
				<div className="operator d-flex align-items-center justify-content-center gap-3">
					<button
						className="btn"
						onClick={() => this.decrementHandler()}
					>
						-
					</button>
					<h4>{this.state.count}</h4>
					<button
						className="btn"
						onClick={() => this.incrementHandler()}
					>
						+
					</button>
				</div>
			</div>
		);
	}
}

export default ClassComponent;
