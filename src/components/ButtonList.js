import React, { useState } from 'react';
import Button from './Button';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ButtonList = () => {
  const buttonNames = [
    // ... (your button names)ALL',
'Game',
 'Music',
 'Gym',
 'MacBook',
 'Live',
'SpaceX',
 'History',
'Mixes',
'SpaceX',
'History',
 'Mixes',
 'History',
 'Mixes',
 'Music',
 'Gym',
 'SpaceX'
  ];
  const [selectedButton, setSelectedButton] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleRightArrowClick = () => {
    const newSelectedButton = (selectedButton + 1) % buttonNames.length;
    setSelectedButton(newSelectedButton);

    // Calculate the new scroll position based on the selected button
    const buttonWidth = 100; // Adjust this based on your button width
    const newScrollPosition = Math.max(0, (newSelectedButton - 2) * buttonWidth);
    setScrollPosition(newScrollPosition);
  };

  return (
    <div className='flex' style={{ overflowX: 'visible', position: 'relative' }}>
      <div
        className='flex'
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {buttonNames.map((name, index) => (
          <Button
            key={index}
            name={name}
            active={index === selectedButton}>
            {name}
          </Button>
        ))}
      </div>
      <div className='flex overflow-x-auto'>
      <button
      style={{ zIndex: 2 }} // Add this line
        className='border  p-2  hover:shadow-lg rounded-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'
        onClick={handleRightArrowClick}
      >
        <AiOutlineArrowRight />
      </button>
      </div>
    </div>
  );
};

export default ButtonList;


// 'ALL',
// 'Game',
// 'Music',
// 'Gym',
// 'MacBook',
// 'Live',
// 'SpaceX',
// 'History',
// 'Mixes',
// 'SpaceX',
// 'History',
// 'Mixes',
// 'SpaceX',
// 'History',
// 'Mixes'