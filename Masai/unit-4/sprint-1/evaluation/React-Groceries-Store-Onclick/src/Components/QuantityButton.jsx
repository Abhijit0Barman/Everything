const QuantityButton = ({ quan, onChange }) => {

  const handleIncre = () => {
    onChange(quan + 1)
  }

  const handleDecre = () => {
    if (quan > 1) {
      onChange(quan - 1)
    } else {
      onChange(0)
    }
  }

  return <>
    <div className="quantity_container">
      <button onClick={handleIncre} data-cy="inc_btn">+</button>
      <p className="quantity">{quan}</p>
      <button onClick={handleDecre} data-cy="dec_btn">-</button>
    </div>
  </>;
};

export default QuantityButton;
