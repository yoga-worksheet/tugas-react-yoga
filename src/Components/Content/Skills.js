import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";

export default class Skills extends Component {
	state = {
		skills: [
			"HTML, CSS",
			"Javascript",
			"PHP",
			"React JS Dasar",
			"Laravel Dasar",
		],
		otherSkill: ["Pengoperasian Linux Dasar", "Inkscape", "GIMP"],
	};

	render() {
		return (
			<Container id="skills" className="my-5">
				<div className="d-flex justify-content-end">
					<Card
						style={{ maxWidth: "600px" }}
						className="shadow rounded-4 border border-0 p-4"
					>
						<Card.Body>
							<div className="d-flex justify-content-between">
								<div className="skill-item">
									<Card.Title className="text-blue bold">
										Skills
									</Card.Title>
									<ul className="px-3">
										{this.state.skills.map(
											(item, index) => (
												<li key={index}>{item}</li>
											)
										)}
									</ul>
								</div>
								<div className="other-skil">
									<h5 className="card-title text-blue bold">
										Other Skills :
									</h5>
									<ul className="px-3">
										{this.state.otherSkill.map(
											(item, index) => (
												<li key={index + "2a"}>
													{item}
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</Container>
		);
	}
}
