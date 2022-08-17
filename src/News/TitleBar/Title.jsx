import React, { Component } from "react";

export default class Title extends Component {
	render() {
		return (
			<h1 className="display-6 m-0">
				{this.props.text === ""
					? "Top Headline News"
					: `Result for ${this.props.text}`}
			</h1>
		);
	}
}
