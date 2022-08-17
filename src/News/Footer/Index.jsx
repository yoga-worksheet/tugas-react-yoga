import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<Container fluid className="p-4">
					<h6 className="text-center text-white m-0">
						Powered By - News Portal
					</h6>
				</Container>
			</footer>
		);
	}
}
