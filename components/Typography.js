import styled, { css } from "styled-components";

const Text = styled.div`
  ${(props) => props.theme.media.desktop} {
    font-size: 25px;
  }
  ${(props) => props.theme.media.tablet} {
    font-size: 20px;
  }
  ${(props) => props.theme.media.phone} {
    font-size: 16px;
  }
  ${(props) => props.theme.custom(540)} {
    font-size: 14px;
  }

  ${({ level }) => {
    switch (level) {
      case 1:
        return css`
          font-size: 28px;
          letter-spacing: -0.5px;
        `;
      case 2:
        return css`
          font-size: 22px;
        `;
      case 3:
        return css`
          font-size: 19px;
          letter-spacing: -0.2px;
        `;
      case 4:
        return css`
          font-size: 16px;
          letter-spacing: 0.2px;
        `;
      case 5:
        return css`
          font-weight: 300;
          font-size: 14px;
          line-height: 150%;
        `;
      case 6:
        return css`
          font-weight: 300;
          font-size: 12px;
          line-height: 1.67;
        `;
      case 7:
        return css`
          font-weight: 300;
          font-size: 10px;
          line-height: 1.67;
        `;
      case "paragraph":
        return css`
          font-weight: 500;
          font-size: 33px;
          line-height: 1;

          letter-spacing: -0.06345px;
        `;
      case "secondary-paragraph":
        return css`
          font-weight: 500;
          font-size: 33px;
          line-height: 1;

          letter-spacing: -0.06345px;
        `;
      default:
        break;
    }
  }};

  ${({ fontFamily }) => {
    switch (fontFamily) {
      case "primary":
        return css`
          font-family: "Poppins";
        `;
      case "secondary":
        return css`
          font-family: "Roboto";
        `;
      default:
        return css`
          font-family: "Poppins";
        `;
    }
  }};

  ${({ fontWeight }) => {
    switch (fontWeight) {
      case "light":
        return css`
          font-weight: 100;
        `;
      case "regular":
        return css`
          font-weight: 300;
        `;
      case "bold":
        return css`
          font-weight: 500;
        `;
      default:
        return css`
          font-weight: 300;
        `;
    }
  }};

  ${({ as }) =>
    as === "a"
      ? css`
          cursor: pointer;
          border-bottom: 1px solid black;
        `
      : ""};
`;

export default Text;
