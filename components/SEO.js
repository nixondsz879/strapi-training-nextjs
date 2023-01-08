import React from "react";

const SEO = (props) => {
  // props.seo = {}
  // props.pageProps.seo
  // props.pageProps.featuredImage

  return (
    <>
      <title>
        {props?.pageProps?.seo?.metaTitle
          ? props?.pageProps?.seo?.metaTitle
          : props?.pageProps?.title}
      </title>
      <meta
        name="description"
        content={props?.pageProps?.seo?.metaDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:image"
        content={
          props?.seo?.metaImage
            ? props?.seo?.metaImage
            : props.pageProps?.featuredImage
        }
      />
    </>
  );
};

export default SEO;
