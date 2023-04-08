import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    // Calculate rating avg
    const {feedback} = useContext(FeedbackContext)
    let average = feedback.reduce( (acc,cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = Math.round(average)

  return (
    <div className="feedback_stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? "No Review Yet" : average+"/10"}</h4>

    </div>
  )
}

export default FeedbackStats