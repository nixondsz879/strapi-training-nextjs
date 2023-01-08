import React from "react";
import { getStrapiMedia } from "../../helpers/strapi";
import styles from '../../styles/blocks/ComponentWebsiteBlocksReviews.module.scss'
import { ImageCover } from "../elements/Helpers";
import ReviewCard from "../elements/cards/ReviewCard";

const ComponentWebsiteBlocksReviews = ({ block }) => {
  //props.block
  //
  return (
    <section className={`${styles.reviews_block} container`}>
      <h2>{block?.Title}</h2>
      <div className="row">
        {block?.Reviews.map((review, index) => {
          //console.log(review)
          return (
            <div
              className="col-xs-12 col-sm-6 col-md-4"
              key={`review-item-${index}`}
            >
              <ReviewCard review={review} />
            </div>
          )
        }
        )
        }
      </div>
    </section>
  );
};

export default ComponentWebsiteBlocksReviews;
