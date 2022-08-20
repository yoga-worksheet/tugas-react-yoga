import { useState, useEffect } from "react";
import { Header } from "./Header/Index";
import { TitleBar } from "./TitleBar/Index";
import { Loader } from "./Loader";
import { CardList } from "./CardList/Index";
import { Footer } from "./Footer/Index";
import {
	getTopHeadline,
	getNewsByQuery,
	getHeadlineByCategory,
} from "../News/fetchData";

export const Hooks = () => {
	const [query, setQuery] = useState("");
	const [isCategory, setIsCategory] = useState(false);
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		if (isCategory) {
			getHeadlineByCategory(query, (response) => {
				if (response.status !== 200) {
					console.log(response.message);
				} else {
					setNews(response.data.articles);
				}
				setIsLoading(false);
			});
		} else {
			if (query) {
				getNewsByQuery(query, (response) => {
					if (response.status !== 200) {
						console.log(response.message);
					} else {
						setNews(response.data.articles);
					}
					setIsLoading(false);
				});
			} else {
				getTopHeadline((response) => {
					if (response.status !== 200) {
						console.log(response.message);
					} else {
						setNews(response.data.articles);
					}
					setIsLoading(false);
				});
			}
		}

		return () => {
			setIsCategory(false);
			setNews([]);
		};
	}, [query]);

	const categoryButtonHandler = (keyword) => {
		setQuery(keyword);
		setIsCategory(true);
	};

	const submitHandler = (keyword) => {
		setQuery(keyword);
	};

	return (
		<>
			<Header onClick={categoryButtonHandler} />
			<TitleBar text={query} onSubmit={submitHandler} />
			{isLoading ? <Loader /> : ""}
			<CardList
					newsData={news}
					isLoading={isLoading}
				/>
			<Footer />
		</>
	);
};
