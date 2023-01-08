import React, { useEffect, useState } from "react";
import {
  GET_PROPERTY_LIST,
  GET_FILTERS
} from "../queries/properties";
import apolloClient from "../helpers/apollo";
import PropertyCard from "../components/elements/cards/PropertyCard";

const ListOfProperties = ({ filters }) => {
  const [propertyList, setPropertyList] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBedroom, setSelectedBedroom] = useState(null);

  useEffect(() => {
    getListOfProperties();
  }, []);

  useEffect(() => {
    getListOfProperties();
  }, [selectedLocation]);

  useEffect(() => {
    getListOfProperties();
  }, [selectedCity]);

  useEffect(() => {
    getListOfProperties();
  }, [selectedBedroom]);

  const getListOfProperties = async () => {
    try {
      const { data } = await apolloClient.query({
        query: GET_PROPERTY_LIST,
        variables: {
          ...(selectedLocation ? { location: selectedLocation } : {}),
          ...(selectedCity ? { city: selectedCity } : {}),
          ...(selectedBedroom ? { numberOfBedroom: selectedBedroom } : {}),
        },
      });

      setPropertyList(data?.pagePropertyLists?.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select
            name="location"
            defaultValue={""}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value={""}>Select Location</option>
            {filters?.listLocations?.data.map((location) => (
              <option key={`location-${location.id}`} value={location.id}>{location.attributes.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            name="city"
            defaultValue={""}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value={""}>Select City</option>
            {filters?.cities?.data.map((city) => (
              <option key={`city-${city.id}`} value={city.id}>{city.attributes.Title}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bedrooms">Bedrooms:</label>
          <select
            name="bedrooms"
            defaultValue={""}
            onChange={(e) => setSelectedBedroom(e.target.value)}
          >
            <option value={""}>Select Bedrooms</option>
            {filters?.numberOfBedrooms?.data.map((bedroom) => (
              <option key={`bedroom-${bedroom.id}`} value={bedroom.id}>{bedroom.attributes.Title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        {
          propertyList?.length ? 
            propertyList.map((property) => (
              <div
                className="col-xs-12 col-sm-6 col-md-3"
                key={`property-item-${property.id}`}
              >
                <PropertyCard property={property?.attributes} />
              </div>
            ))
          : 
          "No Data Found"
        }
      </div>
    </div>
  );
};

export default ListOfProperties;

export const getStaticProps = async () => {
  let filters = null;
  try {
    const { data } = await apolloClient.query({
      query: GET_FILTERS,
    });

    filters = data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      filters,
    }, // will be passed to the page component as props
  };
};