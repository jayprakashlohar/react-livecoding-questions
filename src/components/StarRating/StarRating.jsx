import { useState } from "react";
import propTypes from "prop-types"

const StarRating = ({ maxStars, initialStars, callback }) => {
  const [star, setStar] = useState(initialStars);

  const handleStarClick = (selectedRating) => {
    setStar(selectedRating);
    callback(selectedRating);
  };

  const renderStar = () => {
    let starArr = [];

    for (let i = 1; i <= maxStars; i++) {
      starArr.push(
        <span
          key={i}
          style={{
            fontSize: "24px",
            color: i <= star ? "#FFD700" : "#ccc",
            cursor: "pointer",
          }}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return starArr;
  };
  return <div>{renderStar()}</div>;
};

StarRating.propTypes = {
  maxStars: propTypes.Number,
  initialStars: propTypes.Number,
  callback: propTypes.func,
};

export default StarRating;
