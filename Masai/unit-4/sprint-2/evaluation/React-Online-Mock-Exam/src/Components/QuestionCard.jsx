import React, { useState } from 'react';
import Option from './Option';

const QuestionCard = ({ correctOptionIndex, id, options, setScore, question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [ansArray, setAnsArray] = useState([]);

  const handleUpdate = (value) => {
    if (options[correctOptionIndex] === value) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  const handleUpdateAnswer = () => {
    const ans = Array(4)
      .fill(0)
      .map((_, i) => (i === correctOptionIndex ? 1 : 0));
    setAnsArray(ans);
  };
  return (
    <div className="question-card">
      <h3>{question}</h3>
      <div className="options">
        {options.map((item, index) => (
          <Option index={index} key={index} option={item} handleUpdate={handleUpdate} ansArray={ansArray} handleUpdateAnswer={handleUpdateAnswer} />
        ))}
      </div>
      <div className="show-ans">
        <button onClick={() => setShowAnswer(!showAnswer)}> {showAnswer ? 'Hide Ans' : 'Show Ans'} </button>
        {showAnswer && <p style={{ color: 'green' }}>{options[correctOptionIndex]}</p>}
      </div>
    </div>
  );
};

export default QuestionCard;
