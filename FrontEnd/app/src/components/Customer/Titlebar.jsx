import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const TitleBar = () => {
  return (
    <div className="bg-primary py-4 text-white text-center fixed top-0 left-0 right-0">
      <h1 className="text-2xl font-bold">
        <FontAwesomeIcon icon={faGift} className="mr-2" />
        Customized Gifts
      </h1>
    </div>
  );
};

export default TitleBar;
