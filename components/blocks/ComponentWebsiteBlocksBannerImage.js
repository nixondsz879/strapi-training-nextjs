import React from "react";
import { getStrapiMedia } from "../../helpers/strapi";
import styles from '../../styles/blocks/ComponentWebsiteBlocksBannerImage.module.scss'
import { ImageCover } from "../elements/Helpers";

const ComponentWebsiteBlocksBannerImage = ({ block }) => {
  return (
    <section className={`${styles.banner_block} container`}>
      <ImageCover className={styles.banner_img}>
        <img
            src={getStrapiMedia(block?.Image)}
            alt={block?.Image?.data?.attributes?.alternativeText}
        />
      </ImageCover>
    </section>
  );
};

export default ComponentWebsiteBlocksBannerImage;
