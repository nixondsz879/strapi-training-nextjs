import React from "react";
import CityCard from "../elements/cards/CityCard";
import styles from '../../styles/blocks/ComponentWebsiteBlocksCities.module.scss'

const ComponentWebsiteBlocksCities = ({ block }) => {
  //props.block
  //console.log("block", block);
  return (
    <section className={`${styles.cities_block} container`}>
      <h2>{block?.Title}</h2>
      <div className="row">
        {block?.Cities.map((city, index) => (
          <div
            className="col-xs-12 col-sm-6"
            key={`city-item-${index}`}
          >
            <CityCard city={city?.city?.data?.attributes} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentWebsiteBlocksCities;
