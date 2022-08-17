import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class NavbarComponent extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container fluid>
					<Navbar.Brand>
						<ion-icon name="newspaper-outline"></ion-icon>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								onClick={() => this.props.onClick("")}
							>
								Top Headline
							</Nav.Link>
							<Nav.Link
								onClick={() => this.props.onClick("sports")}
							>
								Sports
							</Nav.Link>
							<Nav.Link
								onClick={() =>
									this.props.onClick("entertainment")
								}
							>
								Entertainment
							</Nav.Link>
							<Nav.Link
								onClick={() => this.props.onClick("technology")}
							>
								Technology
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
