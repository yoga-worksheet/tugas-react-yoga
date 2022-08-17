import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Title from "./Title";
import SearchBar from "./SearchBar";

export default class TitleBar extends Component {
	
	render() {
		return (
			<Container className="d-flex justify-content-between my-5">
				<Title text={this.props.title} />
				<SearchBar onSubmit={this.props.onSubmit}/>
			</Container>
		);
	}
}
