import { Container } from "react-bootstrap"
import { SearchBar } from "./SearchBar"
import { Title } from "./Title"

export const TitleBar = ({text, onSubmit}) => {
    return (
        <Container className="d-flex justify-content-between my-5">
            <Title text={text} />
            <SearchBar onSubmit={onSubmit} />
        </Container>
    )
}