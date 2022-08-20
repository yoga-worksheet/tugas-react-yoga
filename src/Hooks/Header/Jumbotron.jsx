import { Container } from "react-bootstrap";

export const Jumbotron = () => {
	return (
		<Container
			fluid
			className="d-flex justify-content-center align-items-center p-5 blue-color text-white"
		>
			<h1 className="display-3 bold gray-500 title">
				<ion-icon name="newspaper-outline"></ion-icon> News Portal
			</h1>
		</Container>
	);
};
