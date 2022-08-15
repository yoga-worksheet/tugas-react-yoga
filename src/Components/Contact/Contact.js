import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";

export default class Contact extends Component {
	render() {
		return (
			<Container id="contact" className="my-5">
				<div class="d-flex justify-content-center justify-content-md-end">
					<Form>
						<h5 class="text-blue bold mb-3">Contact Me</h5>
						<Form.Label htmlFor="email">Email</Form.Label>
						<Form.Control
							className="mb-3"
							type="email"
							placeholder="name@example.com"
							id="email"
						/>
						<Form.Label htmlFor="message">Message</Form.Label>
						<Form.Control
							as="textarea"
							id="message"
							rows="3"
                            className="mb-3"
						></Form.Control>
						<Button className="button-blue">Send</Button>
					</Form>
				</div>
			</Container>
		);
	}
}
