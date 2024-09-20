import React from "react";
import Container from "../../../../Components/Container/Container";
import Logo from "./Components/Logo/Logo";
import SearchBar from "./Components/SearchBar/SearchBar";
import RightHeader from "./Components/RightHeader/RightHeader";

const Navbar = () => {
  return (
    <Container className="w-[100%] shadow-lightgray shadow-md">
      <Container className="w-[80%] mx-auto py-4 flex justify-between text-center">
        <Logo />
        <SearchBar />
        <RightHeader />
      </Container>
    </Container>
  );
};

export default Navbar;
