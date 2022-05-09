import React from 'react';

import { CategoryCard } from '../../Components';

export const HomePage: React.FC = () => {
  return (
    <div className="content mt-2">
      <h1 className="headline1 text-center mt-3 mb-3 semibold text-yellow-00">Puchu</h1>
      <h2 className="headline2 text-center mt-3 mb-3 ">Whats in your Mind?</h2>

      {/* -- Share Quiz - TODO- */}
      <div className="flex flex-row space-evenly mt-3">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      
      </div>
    </div>
  );
};
