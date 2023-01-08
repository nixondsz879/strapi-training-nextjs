import React from "react";
import ComponentWebsiteBlocksPropertyListing from "./blocks/ComponentWebsiteBlocksPropertyListing";
import ComponentWebsiteBlocksCities from "./blocks/ComponentWebsiteBlocksCities";
import ComponentWebsiteBlocksBannerImage from "./blocks/ComponentWebsiteBlocksBannerImage";
import ComponentWebsiteBlocksReviews from "./blocks/ComponentWebsiteBlocksReviews";

const FullBlockRenderer = ({ blocks }) => {
  //props.blocks
  const getComponent = (block, index) => {
    switch (block.__typename) {
      case "ComponentWebsiteBlocksPropertyListing":
        return (
          <ComponentWebsiteBlocksPropertyListing
            block={block}
            key={`section-block-${index}`}
          />
        );
      case "ComponentWebsiteBlocksCities":
        return (
          <ComponentWebsiteBlocksCities
            block={block}
            key={`section-block-${index}`}
          />
        );
      case "ComponentWebsiteBlocksBannerImage":
        return (
          <ComponentWebsiteBlocksBannerImage
            block={block}
            key={`section-block-${index}`}
          />
        );
      case "ComponentWebsiteBlocksReviews":
        return (
          <ComponentWebsiteBlocksReviews
            block={block}
            key={`section-block-${index}`}
          />
        );

      default:
        break;
    }
  };
  return <div>{blocks?.map((block, index) => getComponent(block, index))}</div>;
};

export default FullBlockRenderer;
