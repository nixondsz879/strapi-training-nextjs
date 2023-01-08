export const getStrapiMedia = (imageData) => {
  const imageAttributes = imageData?.data?.attributes;
  return `http://localhost:1337${imageAttributes?.url}`;
};
