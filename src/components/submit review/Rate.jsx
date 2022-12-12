/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useState } from "react";

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <i
          className="fa-solid fa-star text-xl cursor-pointer"
          key={idx}
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          //eslint-disable-next-line
          onMouseEnter={() => (setHoverRating(idx), onRating(idx))}
          onMouseLeave={() => setHoverRating(0)}
        ></i>
      ));
  }, [count, rating, hoverRating]);

  return <div className="flex gap-2">{starRating}</div>;
};

Rate.prototype = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#e72e77",
    unfilled: "#DCDCDC",
  },
};

export default Rate;
