import apolloClient from "../../helpers/apollo";
import {
  GET_PROPERTY_DETAIL,
  GET_PROPERTY_SLUGS,
} from "../../queries/properties";
import { getStrapiMedia } from "../../helpers/strapi";
import BookingForm from "../../components/elements/forms/BookingForm";
import styled from "styled-components";

const Icon = styled.li`
  img {
    width: 20px;
    height: auto
  }
`;

const PropertyDetailPage = ({ pageID, pageData }) => {

    return (
        <div>
            <section>
                <div className="banner">
                  
                  <img
                    src={getStrapiMedia(pageData?.thumbnailImage)}
                    alt={pageData?.title}
                    />
                    
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>{pageData?.title}</h1>
                            <h3>{pageData?.location?.data?.attributes?.name}</h3>

                            <h4>Description</h4>
                            <p>{pageData?.description}</p>

                            {
                                pageData?.facilities?.data.length ? (
                                    <ul>
                                        {pageData?.facilities?.data?.map((facility) => (
                                            <Icon key={`facility-`+facility.id}>
                                                <img
                                                src={getStrapiMedia(facility.attributes.icon)}
                                                alt={facility.attributes.title}
                                                /> &nbsp;
                                                {facility.attributes.title}
                                            </Icon>
                                        ))}
                                    </ul>
                                ) : ""
                            }
                        </div>
                        <div className="col-md-4">
                            <BookingForm propertyID = {pageID} />
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default PropertyDetailPage;

export const getStaticPaths = async () => {
    let paths = [];
  
    const { data } = await apolloClient.query({
      query: GET_PROPERTY_SLUGS,
      fetchPolicy: "no-cache",
    });

    data?.pagePropertyLists?.data?.map((property) => {
      paths = [
        ...paths,
        {
          params: {
            slug: property?.attributes?.slug,
          },
        },
      ];
    });

    return {
      paths,
      fallback: true,
    };
  };
  
  export const getStaticProps = async ({ params }) => {
    let pageData = null;
    let pageID = null;
  
    try {
      const { data } = await apolloClient.query({
        query: GET_PROPERTY_DETAIL,
        fetchPolicy: "no-cache",
        variables: {
          slug: params?.slug,
        },
      });
      pageData = data?.pagePropertyLists?.data[0]?.attributes;
      pageID = data?.pagePropertyLists?.data[0]?.id;
    } catch (error) {
      console.log(error);
    }

    return {
      props: {
        pageID,
        pageData,
      }, // will be passed to the page component as props
    };
  };