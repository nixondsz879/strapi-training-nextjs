import { gql } from "@apollo/client";

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