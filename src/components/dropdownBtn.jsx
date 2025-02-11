import React, { useState } from 'react';

const DropdownBtn = () => {
    
    return (
        <div className="flex flex-col space-y-2">
  <label className="text-select">
    Choose an option:
  </label>
  <select className='custom-select'>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>

      
    );
};

export default DropdownBtn;