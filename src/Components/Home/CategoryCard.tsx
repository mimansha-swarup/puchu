import { Link } from "react-router-dom";
import React from "react";
import { DocumentData } from 'firebase/firestore';
interface CategoryProps {
  data: DocumentData,
}
export const CategoryCard:React.FC<CategoryProps> = ({data}) => {

  return (
    <Link to={`/category/${data?.name}`} className="text-white-04">
      <div className="flex flex-column">
        <img
          className="avatar-lg avatar-round"
          src={data?.coverImage}
          alt="pokemon"
        />

        <p className="subtitle1 text-center ">{data?.name}</p>
      </div>
    </Link>
  );
};
