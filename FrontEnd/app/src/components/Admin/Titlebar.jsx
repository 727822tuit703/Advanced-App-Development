import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitleBar = () => {
  return (
    <div className="bg-primary py-4 text-white text-center fixed top-0 left-0 right-0">
      <h1 className="text-2xl font-bold">
        Admin Page
      </h1>
    </div>
  );
};

export default TitleBar;
