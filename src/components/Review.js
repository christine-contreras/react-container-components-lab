import React from 'react'

function Review(props) {
    return (
        <div className="review">
            <a href={props.info.link.url}><h3>{props.info.headline}</h3></a>
            <blockquote>{props.info.summary_short}</blockquote>
            <p>{props.info.byline}</p>
        </div>
    )
}

export default Review
