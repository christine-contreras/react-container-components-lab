// Code MovieReviews Here
import React from 'react'


const MovieReviews = (props) => (
    <div className="review-list">
        {/* { props.reviews.map(review => <Review key={review.headline} info={review} />) } */}
        { props.reviews.map(review => {
            return <div className="review" key={review.headline}>
                <a href={review.link.url}><h3>{review.headline}</h3></a>
                <blockquote>{review.summary_short}</blockquote>
                <p>{review.byline}</p>
            </div>
        }) }
    </div>
)


MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews
