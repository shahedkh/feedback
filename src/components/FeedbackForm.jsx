import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
    const [text , setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <div className="input-group">
        <input onChange={handleTextChange} value={text} type='text' placeholder='write a review'/>
        <Button type="submit" >Send</Button>
      </div>
    </Card>
  );
};

export default FeedbackForm;
