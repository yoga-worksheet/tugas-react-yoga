import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class FormGroup extends Component {
	render() {
		return (
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>{this.props.label}</Form.Label>
				<Form.Control
                    required
					type={this.props.type}
					placeholder={this.props.placeholder}
					value={this.props.value}
					onChange={(event) =>
						this.props.onChange(event.target.value)
					}
				/>
				<Form.Text
					className={this.props.error ? "text-red" : "text-muted"}
				>
					{this.props.text}
				</Form.Text>
			</Form.Group>
		);
	}
}

FormGroup.defaultProps = {
	error: false,
};
