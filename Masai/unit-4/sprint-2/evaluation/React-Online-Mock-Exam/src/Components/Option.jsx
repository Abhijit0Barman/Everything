import React from 'react';

const Option = ({ index, option, handleUpdate, ansArray, handleUpdateAnswer }) => {
  const handleButtonClick = () => {
    handleUpdateAnswer();
    handleUpdate(option);
  };
  return (
    <div data-testid="option">
      <button className={ansArray.length > 0 ? ansArray[index] === 1 ? 'bgGreen' : 'bgRed' : undefined} disabled={ansArray.length > 0} onClick={handleButtonClick} >
        {option}
      </button>
    </div>
  );
};

export default Option;
