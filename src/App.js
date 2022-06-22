import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
newFeedback.id = uuidv4()
setFeedback([newFeedback,...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are You sure ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };



  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats />
        <FeedbackList handleDelete={deleteFeedback} />
      </div>
    </FeedbackProvider>
  );
}

export default App;