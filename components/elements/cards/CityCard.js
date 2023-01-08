import { getStrapiMedia } from "../../../helpers/strapi";
import styles from '../../../styles/elements/CityCard.module.scss'
import { ImageCover } from "../Helpers";

const CityCard = ({ city }) => {
    

    const properties = city?.page_property_lists?.data;

    let pricePerNight = 0;
    if( properties.length ) {
        properties.forEach((property) => {
            let price = property.attributes.pricePerNight;
            //console.log("property", price);
            if( pricePerNight < price  ) {
                pricePerNight = price;
            }
        })
    }

    return (
      <ImageCover className={styles.city_card}>
        <span><b>{ city?.page_property_lists?.data?.length }</b> Properties</span>
        {
            pricePerNight ? <span className={styles.price}>From <b>${pricePerNight}</b> per night</span> : ''
        }
        <img
            src={getStrapiMedia(city?.Thumbnail)}
            alt={city?.Title}
        />
        <div className={styles.content}>
          <h3>{city?.Title}</h3>
          <p>{city?.Content}</p>
        </div>
      </ImageCover>
    );
  };
  
  export default CityCard;