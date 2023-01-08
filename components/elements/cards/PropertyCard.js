import React from "react";
import styled from "styled-components";
import { getStrapiMedia } from "../../../helpers/strapi";
import Link from "next/link";
const Card = styled.div``;

const Image = styled.div`
  margin: 0 0 9px;
  img {
    width: 100%;
  }
`;

const Content = styled.div`
  h3 {
    color: #000000;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 19px;
    margin: 0;
  }
  h4 {
    opacity: 0.6;
    color: #000000;
    font-size: 13px;
    letter-spacing: 0.3px;
    line-height: 15px;
    margin: 0 0 10px;
  }
  span {
    color: #666666;
    font-family: Roboto;
    font-size: 13px;
    letter-spacing: 0;
    line-height: 15px;
  }
`;

const PropertyCard = ({ property }) => {
 console.log(property, "property");
  return (
    <Card>
      <Link href={`/properties/${property?.slug}`}>
        <a>
          <Image>
            <img
              src={getStrapiMedia(property?.thumbnailImage)}
              alt={property?.title}
            />
            {/* property && property.image */}
          </Image>
          <Content>
            <h3>{property?.title}</h3>
            <h4>{property?.location?.data?.name}</h4>
            <span>From AED {property?.pricePerNight} per night</span>
          </Content>
        </a>
      </Link>
    </Card>
  );
};

export default PropertyCard;

// strapi-traning.com/images/thubmbail.jpg
