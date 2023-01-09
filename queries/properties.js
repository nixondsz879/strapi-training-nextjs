import { gql } from "@apollo/client";
import { ImageFragment } from "./fragments/image";

export const GET_PROPERTY_LIST = gql`
  query propertyList($location:ID, $numberOfBedroom:ID, $city:ID) {
    pagePropertyLists(filters:{
      location:{
        id:{
          eq:$location
        }
      },
      numberOfBedrooms:{
        id:{
          eq:$numberOfBedroom
        }
      },
      city:{
        id:{
          eq:$city
        }
      }
    }) {
      data {
        id
        attributes {
          title
          slug
          pricePerNight
          location {
            data {
              attributes {
                name
              }
            }
          }
          thumbnailImage {
            ${ImageFragment}
          }
        }
      }
    }
  }
`;

export const GET_PROPERTY_AND_LOCATION = gql`
  query propertListAndLocations {
    pagePropertyLists {
      data {
        attributes {
          title
          slug
          pricePerNight
          location {
            data {
              attributes {
                name
              }
            }
          }
          thumbnailImage {
            ${ImageFragment}
          }
        }
      }
    }
    listLocations {
      data {
        attributes {
          name
        }
      }
    }
  }

`;

export const GET_FILTERS = gql`
  query filterListings{
    listLocations {
      data {
        id 
        attributes {
          name
        }
      }
    }
    cities {
      data {
        id
        attributes {
          Title
        }
      }
    }
    numberOfBedrooms {
      data {
        id
        attributes {
          Title
          Beds
        }
      }
    }
  }

`;

export const GET_PROPERTY_DETAIL = gql`
  query propertyList($slug: String) {
    pagePropertyLists(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          pricePerNight
          thumbnailImage {
            ${ImageFragment}
          }
          location {
            data {
              id
              attributes {
                name
              }
            }
          }

          description
          facilities {
            data {
              id
              attributes {
                title
                icon {
                  ${ImageFragment}
                }
              }
            }
          }
          numberOfBedrooms {
            data {
              id
              attributes {
                Title
                Beds
              }
            }
          }
          numberOfBathrooms {
            data {
              id
              attributes {
                title
                numberOfBathrooms
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PROPERTY_SLUGS = gql`
  query getPropertyList {
    pagePropertyLists {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

export const CREATE_BOOKING = gql`
  mutation bookingForm($startDate: String, $endDate: String, $guestName: String, $numberOfGuests:String, $property: ID) {
    createBooking(data:{
      startDate: $startDate
      endDate: $endDate
      guestName: $guestName
      numberOfGuests: $numberOfGuests
      property: $property
    }) {
      data {
        id 
        attributes {
          guestName
        }
      }
    }
  }
`;