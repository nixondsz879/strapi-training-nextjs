import React from "react";
import PropertyCard from "../elements/cards/PropertyCard";
import { Button } from "../elements/Button";

const ComponentWebsiteBlocksPropertyListing = ({ block }) => {
  let col_count;

  if( block?.property_list.length == 1 ) {
    col_count = 12;
  } else if( block?.property_list.length == 2 ) {
    col_count = 6;
  } else if( block?.property_list.length == 3 ) {
    col_count = 4;
  } else if( block?.property_list.length == 4 ) {
    col_count = 3;
  }

  return (
    <section>
      {/* {property?.notification ? <Notificationbar /> : null} */}
      <div className="container">
        <h2>{block?.title}</h2>
        <div className="row">
          {block?.property_list.map((property, index) => {
            return (
              <div className={`col-xs-12 col-sm-6 col-md-${col_count}`} key={`property-item-${index}`}
              >
                <PropertyCard property={property?.property?.data?.attributes} />
              </div>
            )
          }
          )}
        </div>
        <Button>Show More</Button>
      </div>
    </section>
  );
  // return (
  //   <div>
  //     <h2>{block?.title}</h2>
  //     {block?.property_list?.map((property, index) => {
  //       return (
  //         <h3 key={`property-item-${index}`}>
  //           {property?.property?.data?.attributes?.title}
  //         </h3>
  //       );
  //     })}
  //   </div>
  // );
};

export default ComponentWebsiteBlocksPropertyListing;
