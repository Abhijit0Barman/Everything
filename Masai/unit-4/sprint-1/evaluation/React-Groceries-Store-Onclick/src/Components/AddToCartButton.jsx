const AddToCartButton = ({ onClick }) => {

  return <>
    <button data-cy="add-to-cart-btn" onClick={onClick}
    >
      Add to Cart
    </button>
  </>;
};

export default AddToCartButton;
