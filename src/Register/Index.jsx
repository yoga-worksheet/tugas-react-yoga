import React, { Component } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import FormGroup from "./FormGroup";
import validate from "./validation";

export default class Register extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		errors: [],
	};

	reset = () => {
		this.setState({
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			errors: [],
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		let error = validate(this.state);
		if (error.length > 0) {
			this.setState({ errors: [...error] });
		} else {
			alert(`
				Name : ${this.state.name}
				Email : ${this.state.email}
				Password : ${this.state.password}
			`);
			this.reset();
		}
	};

	render() {
		return (
			<Container className="d-flex justify-content-center align-items-center py-5">
				<Card
					style={{ maxWidth: "600px" }}
					className="shadow rounded-4 border border-0 p-4"
				>
					<Card.Title>
						<h2 className="text-blue bold text-center">
							Register Form
						</h2>
					</Card.Title>
					<Card.Body>
						{this.state.errors.length > 0 ? (
							<Alert key="danger" variant="danger">
								<ul>
									{this.state.errors.map((item, index) => (
										<li key={index + "2b"}>{item}</li>
									))}
								</ul>
							</Alert>
						) : (
							""
						)}
						<Form onSubmit={this.handleSubmit}>
							<FormGroup
								label="Full Name"
								type="text"
								placeholder="Enter Full Name"
								text=""
								value={this.state.name}
								onChange={(value) =>
									this.setState({ name: value })
								}
							/>
							<FormGroup
								label="Email address"
								type="email"
								placeholder="Enter Email"
								text=""
								value={this.state.email}
								onChange={(value) =>
									this.setState({ email: value })
								}
							/>
							<FormGroup
								label="Password"
								type="password"
								placeholder="Enter Password"
								text="*Minimum password 8 character"
								value={this.state.password}
								onChange={(value) =>
									this.setState({ password: value })
								}
							/>
							<FormGroup
								label="Confirm Password"
								type="password"
								placeholder="Enter Confirm Password"
								value={this.state.confirmPassword}
								onChange={(value) =>
									this.setState({ confirmPassword: value })
								}
							/>
							<Button
								type="submit"
								className="button-blue-reverse"
							>
								Register
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}
