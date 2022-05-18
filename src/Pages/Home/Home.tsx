import React from "react";

import { CategoryCard } from "../../Components";

import { useCategory } from "../../Context/categoryContext";

export const HomePage: React.FC = () => {
  const { categoryState} = useCategory();
  const {categories} = categoryState
  console.log(categoryState.categories)
  return (
    <div className="content mt-2">
      <h1 className="headline1 text-center mt-3 mb-3 semibold text-yellow-00">
        Puchu
      </h1>
      <h2 className="headline2 text-center mt-3 mb-3 ">Whats in your Mind?</h2>

      <div className="flex flex-row space-evenly mt-3">
        {
        Object.keys(categories).map(objKey => <CategoryCard key={categories[objKey].name} data={categories[objKey]}/>)
        
        }
      </div>
    </div>
  );
};
