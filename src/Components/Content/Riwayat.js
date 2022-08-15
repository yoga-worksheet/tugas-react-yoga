import React, { Component } from "react";
import { Container, Card, Table } from "react-bootstrap";

export default class Riwayat extends Component {
	render() {
		return (
			<Container id="Riwayat" className="my-5">
				<div className="d-flex justify-content-start">
					<Card
						style={{ maxWidth: "600px" }}
						className="shadow rounded-4 border border-0 p-4"
					>
						<Card.Body>
							<Card.Title className="text-blue bold">
								Riwayat Sekolah
							</Card.Title>
							<Table>
								<thead>
									<tr>
										<th>No</th>
										<th>Nama Sekolah</th>
										<th>Tahun Lulus</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>SMK Al Kaaffah Kepanjen</td>
										<td>2017</td>
									</tr>
									<tr>
										<td>2</td>
										<td>SMPN 2 Blitar</td>
										<td>2014</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</div>
			</Container>
		);
	}
}
