import React, { Component } from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import Hero from "./Hero";
import "./Header.css";

export default class Header extends Component {
	render() {
		return (
			<>
				<Hero />
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home">MYP</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="#home">Biografi</Nav.Link>
							<Nav.Link href="#features">Skills</Nav.Link>
							<Nav.Link href="#pricing">Contact</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</>
		);
	}
}
