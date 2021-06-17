import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'j8d9W4LQ6fyFoUR6Z6kAkNQNXvLuFwgw';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = (event) => {
        this.setState({searchTerm: [event.target.value]})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchAPI(this.state.reviews)
        
    }

    fetchAPI = (searchTerm) => {
        fetch(`${URL}&query=${searchTerm}`)
        .then(response => response.json())
        .then(json => {
            this.setState({reviews: json.results })
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <h2>Search Movie Reviews</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button type="submit">Search Reviews</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
