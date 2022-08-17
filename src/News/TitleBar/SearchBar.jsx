import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class SearchBar extends Component {
	state = {
		query: "",
	};

	handleQuery = (event) => {
		this.setState({ query: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.query);
	}

	render() {
		return (
			<Form className="d-flex" onSubmit={this.handleSubmit}>
				<Form.Control
					type="text"
					placeholder="Search Here"
					className="me-1"
					value={this.state.query}
					onChange={this.handleQuery}
				/>
				<Button
					className="d-flex justify-content-center align-items-center"
					variant="outline-primary"
					type="submit"
				>
					<ion-icon name="search-outline"></ion-icon>
				</Button>
			</Form>
		);
	}
}
