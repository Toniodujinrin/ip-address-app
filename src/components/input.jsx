import React from "react";
const Input = (props) => {
  const { value, handleChange } = props;

  return (
    <div>
      <input
        id="input"
        className="input"
        onChange={handleChange}
        value={value}
        placeholder="Search for any IP address or domain"
        type="text"
      />
    </div>
  );
};

export default Input;
