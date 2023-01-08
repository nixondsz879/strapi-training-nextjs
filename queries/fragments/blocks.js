import { ImageFragment } from "./image";

export const ComponentWebsiteBlocksPropertyListing = `
  ... on ComponentWebsiteBlocksPropertyListing {
    __typename
    title
    property_list {
      property {
        data {
          attributes {
            title
            slug
            pricePerNight
            thumbnailImage {
              ${ImageFragment}
            }
            location {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ComponentWebsiteBlocksCities = `
  ... on ComponentWebsiteBlocksCities {
    __typename
    Title
    Cities {
      id
      city {
        data {
          id
          attributes {
            Title
            Content 
            Thumbnail {
              ${ImageFragment}
            }
            page_property_lists {
              data {
                attributes{
                  title
                  pricePerNight
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ComponentWebsiteBlocksBannerImage = `
  ... on ComponentWebsiteBlocksBannerImage {
    __typename
    Image {
      ${ImageFragment}
    }
  }
`;

export const ComponentWebsiteBlocksReviews = `
  ... on ComponentWebsiteBlocksReviews {
    __typename
    Title
    Reviews{
      id
      Name
      Date
      page_property_list {
        data {
          attributes {
            title
          }
        }
      }
      Nights
      Review
      Image {
        ${ImageFragment}
      }
    }
  }
`;

export const BlockQuery = `
  blocks {
    ${ComponentWebsiteBlocksPropertyListing}
    ${ComponentWebsiteBlocksCities}
    ${ComponentWebsiteBlocksBannerImage}
    ${ComponentWebsiteBlocksReviews}
  }
`;
