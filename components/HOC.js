import React from "react";

const MyChildComponent = () => {
  return <div>MyChildComponent</div>;
};

const MainComponent = () => <MyChildComponent />;

const Button = () => {
  return <a type={"primary"}>HOC</a>;
};

export default HOC;

const ButtonComponent = styled.a`
  background-color: ${(props) =>
    props.type === "primary" ? "#ffffff" : "#000000"};
`;
