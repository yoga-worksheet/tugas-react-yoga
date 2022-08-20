import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export const SearchBar = ({onSubmit}) => {
	const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(query);
	}

	return (
		<Form className="d-flex" onSubmit={handleSubmit}>
			<Form.Control
				type="text"
				placeholder="Search Here"
				className="me-1"
				value={query}
				onChange={(event) => setQuery(event.target.value)}
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
};
