import styled from "styled-components";

export const ImageCover = styled.div`
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-fit-position: center;
  }
`;
