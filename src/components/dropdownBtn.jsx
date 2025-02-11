import React, { useState } from "react";

const DropdownBtn = () => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-select">Choose an option:</label>
      <select className="custom-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};

export default DropdownBtn;
