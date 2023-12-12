import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const MultiRangeSlider = () => {
  const [range, setRange] = useState([1000, 10000]);

  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  const handleInputChange = (index, value) => { 
    const newRange = [...range];
    newRange[index] = value;
    setRange(newRange);
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="w-64">
        <Slider
          range
          min={1}
          max={20000}
          step={1}
          value={range}
          onChange={handleSliderChange}
        />
        <div className="flex justify-between mt-2 gap-20">
          <input
            type="number"
            min="1"
            max="20000"
            value={range[0]}
            onChange={(e) => handleInputChange(0, parseInt(e.target.value, 10))}
            className="text-centerbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <input
            type="number"
            min="1"
            max="20000"
            value={range[1]}
            onChange={(e) => handleInputChange(1, parseInt(e.target.value, 10))}
            className="text-centerbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;