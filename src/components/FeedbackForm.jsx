import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {

    const [text, setText] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [rating,setRating] = React.useState(10)

    const {addFeedback,feedbackEdit,updateFeedback} = React.useContext(FeedbackContext)

    React.useEffect(() => {
        if(feedbackEdit.edit === true){
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }},[feedbackEdit])


    const handleTextChange = (e) => {
        setText(e.target.value)
        if (e.target.value.trim().length>0 && e.target.value.trim().length<10) {
            setMessage("Review must be alteast 10 characters")
        }  else {
            setMessage(null)
        }
    }
    
    const handleSubmit = (e) =>  {
        e.preventDefault();
        const newFeedback =  {
            "rating": rating,
            "text": text
        }

        if (feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id,newFeedback)
            setText("")
            feedbackEdit.edit = false
        }else{
            addFeedback(newFeedback,setText)
        }
        
  
        
    };

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us ?</h2>
            <RatingSelect select={setRating}/>
            <div className="input-group">

                <input 
                onChange={handleTextChange}
                type="text" 
                placeholder="Write a review"
                value={text}
                />

                <Button 
                type="submit"
                isDisabled= {text.trim().length<10 ? true:false}
                version="primary"
                >Send</Button>

            </div>

            <div className="message">
                {message}
            </div>
        </form>
    </Card>

  )
}

export default FeedbackForm