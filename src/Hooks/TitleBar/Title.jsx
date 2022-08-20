export const Title = ({text}) => {
	return (
		<h1 className="display-6 m-0">
			{text === ""
				? "Top Headline News"
				: `Result for ${text}`}
		</h1>
	);
};
