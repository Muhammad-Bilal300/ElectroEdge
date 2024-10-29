import React from "react";
import Logo from "../Header/Components/Navbar/Components/Logo/Logo";
import Container from "../../Components/Container/Container";
import ElectroEdgeTransparentIcon from "../../Assets/ElectroEdge-transparent.png";
import { useNavigate } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [IoLogoLinkedin, FaTwitter, FaFacebook];
  const navigate = useNavigate();
  return (
    <Container className="w-full bg-lightGray mt-16">
      <div className="w-[100%] lg:w-[80%] gap-y-5 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row justify-between items-start gap-x-8 py-14">
        <div className="w-[100%] lg:w-[35%]">
          <div className="w-[100%] lg:w-[60%]">
            <img
              src={ElectroEdgeTransparentIcon}
              alt="ElctroEdge"
              className="h-[2rem] cursor-pointer"
              onClick={() => {
                navigate(`/`);
              }}
            />
          </div>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            necessitatibus est illo.
          </p>
          <div className="flex justify-between py-3 items-center">
            <FaHeadphones className="text-gray text-[24px]" />
            <div className="flex flex-col justify-start">
              <p className="tyext-[10px] font-semibold text-gray">
                Have any question?
              </p>
              <p className="text-[12px] font-bold text-primary">+123 456 789</p>
            </div>
            <button className="px-4 h-[36px] border-2 border-primary text-primary flex items-center justify-center rounded-md font-semibold hover:bg-primary hover:text-white">
              Live Chat
            </button>
          </div>
        </div>
        <div className="w-[100%] lg:w-[15%] flex flex-col lg:items-center items-start">
          <h3 className="text-black text-[16px] font-bold uppercase">
            Quicklinks
          </h3>
          <div className="flex flex-col py-4 text-[14px] text-gray font-semibold cursor-pointer justify-start gap-y-3">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Products</p>
            <p>Login</p>
            <p>Sign Up</p>
          </div>
        </div>
        <div className="w-[100%] lg:w-[15%] flex flex-col lg:items-center items-start">
          <h3 className="text-black text-[16px] font-bold uppercase">
            Customer Area
          </h3>
          <div className="flex flex-col py-4 text-[14px] text-gray font-semibold cursor-pointer justify-start gap-y-3">
            <p>My Account</p>
            <p>Orders</p>
            <p>Tracking List</p>
            <p>Terms</p>
            <p>Privacy Policy</p>
            <p>My Cart</p>
          </div>
        </div>
        <div className="w-[100%] lg:w-[35%] lg:items-center items-startfs">
          <h3 className="text-black text-[16px] font-bold uppercase">
            Follow Us
          </h3>
          <div className="py-4 flex gap-x-4">
            {socialLinks.map((Icon, index) => {
              return (
                <div
                  key={index}
                  className="w-[30px] h-[30px] rounded-md border-2 border-primary text-primary flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white"
                >
                  <Icon className="w-[16px] h-[16px]" />
                </div>
              );
            })}
          </div>
          <h3 className="text-black text-[16px] font-bold uppercase my-1">
            Download App
          </h3>
          <div className="py-3 flex flex-row gap-x-2 gap-y-3">
            <div className="bg-black px-2 py-1 flex items-center gap-x-3 rounded-md w-[100%] lg:w-[48%]">
              <FaApple className="text-[26px] text-white" />
              <div>
                <p className="text-[10px] text-white">Download on the</p>
                <h5 className="text-[16px] font-bold text-white">App Store</h5>
              </div>
            </div>
            <div className="bg-black px-2 py-1 flex items-center gap-x-3 rounded-md w-[100%] lg:w-[48%]">
              <BiLogoPlayStore className="text-[26px] text-white" />
              <div>
                <p className="text-[10px] text-white">Get it on</p>
                <h5 className="text-[16px] font-bold text-white">
                  Google Play
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
