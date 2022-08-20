import { Navbar, Container, Nav } from "react-bootstrap";

export const NavbarComponent = ({onClick}) => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand>
					<ion-icon name="newspaper-outline"></ion-icon>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link onClick={() => onClick("")}>
							Top Headline
						</Nav.Link>
						<Nav.Link onClick={() => onClick("sports")}>
							Sports
						</Nav.Link>
						<Nav.Link
							onClick={() => onClick("entertainment")}
						>
							Entertainment
						</Nav.Link>
						<Nav.Link
							onClick={() => onClick("technology")}
						>
							Technology
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
