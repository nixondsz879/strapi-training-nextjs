import styled, { css } from "styled-components";

const Text = styled.div`
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

  ${({ as }) =>
    as === "a"
      ? css`
          cursor: pointer;
          border-bottom: 1px solid black;
        `
      : ""};
`;

export default Text;
