import React, { Component } from "react";
import {
	getHeadlineByCategory,
	getTopHeadline,
	getNewsByQuery,
} from "./fetchData";
import Header from "./Header/Index";
import TitleBar from "./TitleBar/Index";
import CardList from "./CardList/Index";
import Footer from "./Footer/Index";
import Loader from "./Loader";

export default class News extends Component {
	state = {
		query: "",
		error: "",
		isLoading: false,
		news: [],
	};

	componentDidMount() {
		this.setState({ isLoading: true });
		getTopHeadline((response) => {
			if (response.status !== 200) {
				console.log(response.status);
			} else {
				this.setState({ news: [...response.data.articles] });
			}
			this.setState({ isLoading: false });
		});
	}

	categoryButtonHandler = (category) => {
		this.setState({ isLoading: true });
		this.setState({ query: category }, () => {
			getHeadlineByCategory(this.state.query, (response) => {
				if (response.status !== 200) {
					console.log(response.status);
				} else {
					this.setState({ news: [...response.data.articles] });
				}
				this.setState({ isLoading: false });
			});
		});
	};

	submitHandler = (keyword) => {
		this.setState({ isLoading: true });
		this.setState({ query: keyword }, () => {
			if (this.state.query === "") {
				getTopHeadline((response) => {
					if (response.status !== 200) {
						console.log(response.status);
					} else {
						this.setState({ news: [...response.data.articles] });
					}
					this.setState({ isLoading: false });
				});
			} else {
				getNewsByQuery(this.state.query, (response) => {
					if (response.status !== 200) {
						console.log(response.status);
					} else {
						this.setState({ news: [...response.data.articles] });
					}
					this.setState({ isLoading: false });
				});
			}
		});
	};

	render() {
		return (
			<>
				<Header onClick={this.categoryButtonHandler} />
				<TitleBar
					title={this.state.query}
					onSubmit={this.submitHandler}
				/>
				{this.state.isLoading ? <Loader /> : ""}
				<CardList
					newsData={this.state.news}
					isLoading={this.state.isLoading}
				/>
				<Footer />
			</>
		);
	}
}
