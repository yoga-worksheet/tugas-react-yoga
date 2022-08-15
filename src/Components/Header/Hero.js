import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Hero extends Component {
    render() {
        return (
            <Container fluid id="hero" className="d-flex flex-column justify-content-center align-items-center p-5 text-white">
                <h1 className="display-2 bold">My Portofolio</h1>
                <h2>~</h2>
                <h2>Muhammad Yoga Pratama</h2>
            </Container>
        )
    }
}
