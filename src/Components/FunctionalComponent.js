import React, { useState } from "react";

export const FunctionalComponent = () => {
	const [count, setCount] = useState(0);

	return (
		<div id="functional-component" className="card">
			<h2>Hello dari functional component</h2>
			<div className="operator d-flex align-items-center justify-content-center gap-3">
				<button
					className="btn"
					onClick={() => {
						if (count > 0) setCount(count - 1);
					}}
				>
					-
				</button>
				<h4>{count}</h4>
				<button className="btn" onClick={() => setCount(count + 1)}>
					+
				</button>
			</div>
		</div>
	);
};
