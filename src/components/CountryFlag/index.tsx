// src/components/CountryFlag/index.tsx

import React from 'react';
import styles from './styles.module.css';

interface CountryFlagProps {
  flagUrl: string;
  countryCode: string;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ flagUrl, countryCode }) => {
  return flagUrl ? (
    <div className={styles.flag}>
      <img src={flagUrl} alt={`${countryCode} flag`} className={styles.flagImage} />
    </div>
  ) : null;
};

export default CountryFlag;
