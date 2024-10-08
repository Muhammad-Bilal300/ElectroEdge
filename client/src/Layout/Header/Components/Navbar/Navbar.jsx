import React from "react";
import Container from "../../../../Components/Container/Container";
import Logo from "./Components/Logo/Logo";
import SearchBar from "./Components/SearchBar/SearchBar";
import RightHeader from "./Components/RightHeader/RightHeader";

const Navbar = () => {
  return (
    <Container className="w-[100%] shadow-gray shadow-md mb-2 fixed top-0 left-0 z-50 bg-white">
      <Container className="w-[80%] mx-auto py-3 flex justify-between text-center">
        <Logo />
        <SearchBar />
        <RightHeader />
      </Container>
    </Container>
  );
};

export default Navbar;
