import { Jumbotron } from "./Jumbotron";
import { NavbarComponent } from "./NavbarComponent";

export const Header = ({onClick}) => {
	return (
		<>
			<Jumbotron />
			<NavbarComponent onClick={onClick} />
		</>
	);
};
