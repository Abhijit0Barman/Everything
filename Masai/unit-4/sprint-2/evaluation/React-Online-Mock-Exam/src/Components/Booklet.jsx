import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

const Booklet = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [examStart, setExamStart] = useState(true);

  const startExam = () => {
    fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz').then((res) => res.json()).then((data) => {
      setQuestions(data.data);
      setScore(0);
      setExamStart(false);
    }).catch((err) => console.log(err));
  };
  const endExam = () => {
    setQuestions([]);
    setScore(0);
    setExamStart(true);
  };
  return (
    <div data-testid="Booklet">
      {examStart ?
        (
          <div className="welcome-div">
            <h1>To begin the exam, click on the 'Start Exam' button below</h1>
            <button onClick={startExam}>Start Exam</button>
          </div>
        )
        :
        (
          <div className="questions-container">
            <button onClick={endExam}>End Exam</button>
            <h3>Score: {score}</h3>
            {questions.map((question) => (
              <QuestionCard key={question.id} {...question} setScore={setScore} />
            ))}
          </div>
        )
      }
    </div>
  );
};
export default Booklet;
