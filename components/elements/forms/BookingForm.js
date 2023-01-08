import React, { useEffect, useState } from 'react'
import apolloClient from "../../../helpers/apollo";
import { CREATE_BOOKING } from "../../../queries/forms"

const BookingForm = ({propertyID}) => {
    const [formStatus, setFormStatus] = useState(false);

    const submitBookingForm = async (e) => {
        e.preventDefault();

        const guestName = document.querySelector("#guestName").value;
        const startDate = document.querySelector("#startDate").value;
        const endDate = document.querySelector("#endDate").value;
        const numberOfGuests = document.querySelector("#numberOfGuests").value;
        const property = document.querySelector("#property").value;

        try {
            const { data } = await apolloClient.query({
              query: CREATE_BOOKING,
              fetchPolicy: "no-cache",
              variables: {
                startDate: startDate,
                endDate: endDate,
                guestName: guestName,
                numberOfGuests: numberOfGuests,
                property: property
              },
            });

            setFormStatus(true)

            document.querySelector("#guestName").value = "";
            document.querySelector("#startDate").value = "";
            document.querySelector("#endDate").value = "";
            document.querySelector("#numberOfGuests").value = "";
            document.querySelector("#property").value = "";

            setTimeout(()=>{
                setFormStatus(false)
            }, 3000)
          } catch (error) {
            console.log(error);
        }
    }

  return (
    <form onSubmit={submitBookingForm}>
        <div className="form-group">
            <label htmlFor="guestName">Guest Name</label><br /><br />
            <input type="text" className="form-control" id="guestName" name="guestName" placeholder="Enter Guest Name"/>
        </div>
        <div className="form-group">
            <label htmlFor="startDate">Start Date</label><br /><br />
            <input type="date" className="form-control" id="startDate" name="startDate" placeholder="Enter Start Date"/>
        </div>
        <div className="form-group">
            <label htmlFor="endDate">End Date</label><br /><br />
            <input type="date" className="form-control" id="endDate" name="endDate" placeholder="Enter End Date"/>
        </div>
        <div className="form-group">
            <label htmlFor="numberOfGuests">Number of Guests</label><br /><br />
            <input type="number" className="form-control" id="numberOfGuests" name="numberOfGuests" placeholder="Enter Number of Guests"/>
        </div><br /><br />
        <input type="hidden" id="property" name="property" value={propertyID} />
        <button type="submit" className="btn btn-primary">Submit</button>

        {
            formStatus ? (
                <div className="alert alert-primary" role="alert">
                    Property Booked Successfully
                </div>
            )
            : ""
        }
    </form>
  )
}

export default BookingForm;
