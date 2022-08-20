export const dateFormat = (ISODate) => {
	const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const month = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const date = new Date(ISODate);
	return `${day[date.getDay()]}, ${date.getDate()} ${
		month[date.getMonth()]
	} ${date.getFullYear()}`;
};
