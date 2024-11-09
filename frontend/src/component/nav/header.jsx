import React from 'react';
import headerImage from './arpico.jpg';

const Header = () => {
  return (
    <div className='bg-white mx-16'>
        <div className="flex justify-center items-start h-37">
            <img src={headerImage} alt="Header" className="w-60" />
        </div>
        <div className='flex bg-blue-800 h-12 w-full'>
          
        </div>
    </div>    
  );
};

export default Header;
