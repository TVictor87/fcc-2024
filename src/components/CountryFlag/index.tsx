import React from "react";
import { apiGetCountryFlag } from "../../api/apiGetCountryFlag";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface CountryFlagProps {
  countryCode: string;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ countryCode }) => {
  const [flagUrl, setFlagUrl] = useState<string>("");

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const flag = await apiGetCountryFlag(countryCode);
        setFlagUrl(flag);
      } catch (error) {
        console.error(`Error fetching flag for ${countryCode}: ${error}`);
      }
    };
    fetchFlag();
  }, [countryCode]);

  return flagUrl ? (
    <div className={styles.flag}>
      <img
        src={flagUrl}
        alt={`${countryCode} flag`}
        className={styles.flagImage}
      />
    </div>
  ) : null;
};

export default CountryFlag;
