import { gql } from "@apollo/client";
import { BlockQuery } from "./fragments/blocks";

export const GET_PAGE_DATA = gql`
  query pagesSitemap($slug: String) {
    pageSitemaps(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          ${BlockQuery}
        }
      }
    }
  }
`;
