import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/landing/Navbar";
import OurBrands from "../../components/landing/OurBrands";
import Footer from "../../components/landing/Footer";
import Category from "../../components/landing/CategoryCard";
import BannerRecommendation from "../../components/landing/BannerRecomendation";
import CatCategoryCards from "../../components/landing/CatCategoryCards";
import ProductLine from "../../components/landing/ProductLine";
import AIRecommendationSection from "../../components/landing/AIRecommendation";
import Carousel from "../../components/landing/Carousel";
import FindDietAi from "../../components/landing/FindDietAi";

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
        <Carousel/>
        <ProductLine/>
        <OurBrands></OurBrands>
        <CatCategoryCards/>
        <Category/>
        <FindDietAi/>
        <BannerRecommendation/>
        <AIRecommendationSection/>
        <Footer/>
      </Box>
    </>
  );
};

export default Landing;
