import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Outlet, Link } from "react-router-dom";

const Routing = () => {
	let activeStyle = {
		fontWeight: "500",
	};

	return (
		<>
			<Navbar bg="light" variant="light" expand="lg" sticky="top">
				<Container fluid>
					<Link className="navbar-brand" to="/">React Router</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavLink
								to="biodata"
								className="nav-link"
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								Biodata
							</NavLink>
							<NavLink
								to="news"
								className="nav-link"
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								News
							</NavLink>
							<NavLink
								to="register"
								className="nav-link"
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								Register
							</NavLink>
							<NavLink
								to="redux"
								className="nav-link"
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								Redux
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
};

export default Routing;
