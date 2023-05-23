import React from 'react';
import styles from './RecipeItem.module.css';
import { useSelector } from 'react-redux';

const RecipeItem = ({ recipe }) => {
  const { favorites } = useSelector((state) => state);

  // console.log(favorites);

  return (
    <div className={styles.item}>
      <h2>{recipe.name}</h2>
      <button>Add to favorites</button>
    </div>
  );
};

export default RecipeItem;
