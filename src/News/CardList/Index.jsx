import React, { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import CardItem from "./CardItem";

export default class CardList extends Component {
	render() {
		return (
			<Container
				fluid="sm"
				className="mb-5"
				style={{ minHeight: "400px" }}
			>
				{this.props.isLoading ? (
					""
				) : this.props.newsData.length === 0 ? (
					<Row>
						<Col>
							<Alert key="danger" variant="danger">
								No Article found
							</Alert>
						</Col>
					</Row>
				) : (
					<Row xs={1} md={2} lg={3} className="g-4">
						{this.props.newsData.map((news, index) => (
							<Col key={index + "nw"}>
								<CardItem
									imgUrl={news.urlToImage}
									url={news.url}
									title={news.title}
									author={news.author}
									description={news.description}
									publishedAt={news.publishedAt}
								/>
							</Col>
						))}
					</Row>
				)}
			</Container>
		);
	}
}
