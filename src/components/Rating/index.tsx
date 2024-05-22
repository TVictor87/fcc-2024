// src/components/Rating/index.tsx

import React from 'react';
import styles from './styles.module.css';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      {Array(5).fill(0).map((_, index) => (
        <span key={index} className={index < rating ? styles.filled : ''}>★</span>
      ))}
    </div>
  );
};

export default Rating;
