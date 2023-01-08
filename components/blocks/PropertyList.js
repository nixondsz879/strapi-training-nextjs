import React from "react";
import PropertyCard from "../elements/cards/PropertyCard";
import { Button } from "../elements/Button";
import { PropertyListObject } from "../../helpers/mock/properties";

const PropertyList = ({ block }) => {
  return (
    <section>
      {/* {property?.notification ? <Notificationbar /> : null} */}
      <div className="container">
        <h2>{block?.title}</h2>
        <div className="row">
          {block?.list.map((property) => (
            <div
              className="col-xs-12 col-sm-6 col-md-3"
              key={`property-item-${property.id}`}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
        <Button>Show More</Button>
      </div>
    </section>
  );
};

export default PropertyList;
