import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <>
      {/*<!--header--> */}
      <Nav />
      {/*header*/}

      {children}
      {/*footer*/}
      <Footer />
      {/*//footer*/}
    </>
  );
};
export default Layout;
