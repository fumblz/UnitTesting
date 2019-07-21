import React from "react";
import PropTypes from "prop-types";

const Banner = ({ title }) => {
  if (!title) {
    return null;
  }
  return (
    <div data-test="Banner">
      <h1 data-test="Title">{title}</h1>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fname: PropTypes.string,
      lname: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool
    })
  )
};

export default Banner;
