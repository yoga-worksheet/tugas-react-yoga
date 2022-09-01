import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../app/features/Counter/actions";

const Counter = () => {
	let { count } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div className="container p-5 d-flex justify-content-center align-items-center">
			<button
				className="btn button-blue"
				onClick={() => dispatch(decrementWithCheckingAction(1))}
			>
				-
			</button>
			<span className="mx-3">{count}</span>
			<button
				className="btn button-blue"
				onClick={() => dispatch(increment(1))}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
