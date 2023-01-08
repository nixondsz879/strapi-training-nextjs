import React from "react";

const Layout = (props) => {
  return (
    <div>
      <header>This is my header</header>
      <main>{props.children}</main>
      <footer>This is my footer</footer>
    </div>
  );
};

export default Layout;
