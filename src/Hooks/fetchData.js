import axios from "axios";

const API_KEY = "37b8dfed79c74b29abfe6f7cdb318db5";

const getTopHeadline = (callback) => {
	axios
		.get(
			`https://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}`
		)
		.then(function (response) {
			return callback(response);
		})
		.catch(function (error) {
			return callback(error.response);
		});
};

const getHeadlineByCategory = (category, callback) => {
	axios
		.get(
			`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${API_KEY}`
		)
		.then(function (response) {
			return callback(response);
		})
		.catch(function (error) {
			return callback(error.response);
		});
};

const getNewsByQuery = (query, callback) => {
	axios
		.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
		.then(function (response) {
			return callback(response);
		})
		.catch(function (error) {
			return callback(error.response);
		});
};

export { getTopHeadline, getHeadlineByCategory, getNewsByQuery };
