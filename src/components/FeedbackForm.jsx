import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from './RatingSelect'

const FeedbackForm = ({handleAdd}) => {
    const [text , setText] = useState('')
    const [btnDisabled , setBtnDisabled] = useState(true)
    const [message , setMessage] = useState('')
    const [rating , setRating] = useState(10)

    const handleTextChange = (e) => {
      if( text === ""){
        setBtnDisabled(true)
        setMessage(null)
      }else if (text !== '' && text.trim().length <=10 ){
        setBtnDisabled(true)
        setMessage("Text must be at least 10 characters")
      }else{
        setBtnDisabled(false)
        setMessage(null)
      }
      
        setText(e.target.value)
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating 
            }
            handleAdd(newFeedback)

            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
      <h2>How would you rate your service with us?</h2>
      <RatingSelect />
      <div className="input-group">
        <input onChange={handleTextChange} value={text} type='text' placeholder='write a review'/>
        <Button type="submit" isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className="message">{message}</div>}</form>
    </Card>
  );
};

export default FeedbackForm;
