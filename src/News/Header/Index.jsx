import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import NavbarComponent from "./NavbarComponent";

export default class Header extends Component {
	render() {
		return (
			<header>
				<Jumbotron />
				<NavbarComponent onClick={this.props.onClick} />
			</header>
		);
	}
}
