import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import AdminBody from "./AdminBody/AdminBody";
import Footer from "./Footer/Footer";

const Layout = () => {
  const location = useLocation(); // Access current route information
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log(location.pathname.split("/"));
    if (location.pathname.split("/")[1] == "admin") {
      setUrl("admin");
      console.log("true");
    } else {
      setUrl("");
      console.log("false");
    }
  }, [location.pathname]);

  return (
    <div className={`${url === "admin" ? "flex" : ""} `}>
      {url === "admin" ? <Sidebar /> : <Header />}

      {url === "admin" ? (
        <AdminBody />
      ) : (
        <div>
          <Body /> <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
