import React from "react";
import apolloClient from "../helpers/apollo";
import { GET_PAGE_DATA } from "../queries/pages";
import FullBlockRenderer from "../components/FullBlockRenderer";

const Homepage = (props) => {
  
  //console.log("props",props)
  return (
    <div>
      <h1>{props?.pageData?.title}</h1>
      <FullBlockRenderer blocks={props?.pageData?.blocks} />
    </div>
  );
};

export default Homepage;

export const getStaticProps = async () => {
  let pageData = null;
  try {
    const { data } = await apolloClient.query({
      query: GET_PAGE_DATA,
      variables: {
        slug: "homepage", 
      },
    }); 

    pageData = data?.pageSitemaps?.data[0]?.attributes;
  } catch (error) {
    console.log(error);
  }

  return {
    revalidate: 10,
    props: {
      pageData,
    },
  };
};
