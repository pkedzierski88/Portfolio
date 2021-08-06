import React from 'react';

const SingleSkill = (props) => {
  return (
    <div className="icon">
      <h5>{props.text}</h5>
      <i className={props.classes}></i>
    </div>
  );
};

export default SingleSkill;
