import React from "react";

const StarRating = ({ rating }) => {
  //rating =4
const stars = [];
for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
    stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    } else {
    stars.push(<i key={i} className="far fa-star text-warning"></i>);
    }
}
return <>{stars}</>;
};
export default StarRating;