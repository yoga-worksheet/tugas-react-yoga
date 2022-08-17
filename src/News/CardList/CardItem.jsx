import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { dateFormat } from "./dateFormat";

export default class CardItem extends Component {
	render() {
		return (
			<Card className="h-100 border border-0 shadow">
				<Card.Img variant="top" src={this.props.imgUrl} />
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						By : {this.props.author}
					</Card.Subtitle>
					<Card.Text>{this.props.description}</Card.Text>
					<a href={this.props.url} className="align-self">
						Read More
					</a>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">
						Published at {dateFormat(this.props.publishedAt)}
					</small>
				</Card.Footer>
			</Card>
		);
	}
}
