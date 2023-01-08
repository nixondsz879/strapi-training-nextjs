import { getStrapiMedia } from "../../../helpers/strapi";
import styles from '../../../styles/elements/ReviewCard.module.scss'
import { ImageCover } from "../Helpers";

const ReviewCard = ({ review }) => {
    let property = review?.page_property_list?.data?.attributes?.title;
    
    return (
      <div className={styles.review_card}>
        <div className={styles.top_block}>
            <ImageCover className={styles.author}>
                <img
                src={getStrapiMedia(review?.Image)}
                alt={review?.Name}
                />
            </ImageCover>
            <div className={styles.content}>
                <h3>{review?.Name}</h3>
                <div className={styles.date}>{review?.Date}</div>
                <div className={styles.nights}>{property} - {review?.Nights} nights</div>
            </div>
        </div>
        <p>
            {review?.Review}
        </p>
      </div>
    );
  };
  
  export default ReviewCard;