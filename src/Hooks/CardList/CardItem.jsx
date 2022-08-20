import { Card } from "react-bootstrap";
import {dateFormat} from "./dateFormat"

export const CardItem = ({imgUrl, title, author, description, url, publishedAt}) => {
	return (
		<Card className="h-100 border border-0 shadow">
			<Card.Img variant="top" src={imgUrl} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					By : {author}
				</Card.Subtitle>
				<Card.Text>{description}</Card.Text>
				<a href={url} className="align-self">
					Read More
				</a>
			</Card.Body>
			<Card.Footer>
				<small className="text-muted">
					Published at {dateFormat(publishedAt)}
				</small>
			</Card.Footer>
		</Card>
	);
};
