import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/landing/Navbar";
import OurBrands from "../../components/landing/OurBrands";
import Footer from "../../components/landing/Footer";
import Category from "../../components/landing/CategoryCard";

const menuLinks = ["Private label", "Brands", "About us", "News", "Vacancies"];
const Landing = () => {
  return (
    <>
      <Box
        // w="100vw"
        // maxW="100%"
        minH="100vh" 
        overflowX="hidden" 
        display="flex"
        flexDirection="column"
      >
        <Navbar menuLinks={menuLinks}/>
        <OurBrands></OurBrands>
        <Category/>
        <Footer/>
      </Box>
    </>
  );
};

export default Landing;
