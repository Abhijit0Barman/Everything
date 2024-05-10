import PropTypes from "prop-types";
import { Pin } from "./Pin";

export const PinTab = ({ length, maxChar, setOtp }) => {
  if (typeof length !== "number" || typeof maxChar !== "number") {
    console.error("length and maxChar must be numbers");
    return null; // You can return an error message or handle this case as needed
  }

  return (
    <div data-testid="pin-tab">
      {/* Add Pin component here  */}
      <Pin maxChar={maxChar} length={length} setOtp={setOtp} />
    </div>
  );
};

// Check length and maxChar props here
PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number.isRequired,
  setOtp: PropTypes.func.isRequired,
};
