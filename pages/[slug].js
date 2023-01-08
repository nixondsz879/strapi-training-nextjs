import React from "react";
import apolloClient from "../helpers/apollo";
import { GET_PAGE_DATA } from "../queries/pages";
import FullBlockRenderer from "../components/FullBlockRenderer";

const DynamicSlug = (props) => {
  return (
    <div>
      <h1>{props?.pageData?.title}</h1>
      <FullBlockRenderer blocks={props?.pageData?.blocks} />
    </div>
  );
};

export default DynamicSlug;

export const getServerSideProps = async ({ params }) => {
  let pageData = null;
  try {
    const { data } = await apolloClient.query({
      query: GET_PAGE_DATA,
      variables: {
        slug: params?.slug,
      },
    });
    pageData = data?.pageSitemaps?.data[0]?.attributes;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      pageData,
    },
  };
};
