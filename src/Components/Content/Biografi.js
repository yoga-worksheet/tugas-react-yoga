import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";

export default class Biografi extends Component {
	render() {
		return (
			<Container id="biografi" className="my-5">
				<div className="d-flex justify-content-start">
					<Card
						style={{ maxWidth: "600px" }}
						className="shadow rounded-4 border border-0 p-4"
					>
						<Card.Body>
							<Card.Title className="text-blue bold">
								Biografi
							</Card.Title>
							<Card.Text className="text-justify">
								Perkenalkan nama saya Muhammad Yoga Pratama.
								Asal dari kabupaten Blitar. Saat ini sedang
								mengikuti pelatihan yang diadakan oleh eduwork
								mengenai MERN stack. Saya akan berusaha
								menyelesaikan pelatihan ini secepat mungkin.
							</Card.Text>
							<Card.Text className="text-justify">
								Saya merupakan lulusan SMK jurusan Teknik
								Komputer dan Jaringan. Sempat kuliah informatika
								tetapi tidak terselesaikan karena satu dan lain
								hal. Memiliki pengetahuan dasar tentang web
								programming.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</Container>
		);
	}
}
