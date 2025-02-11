import React, { useState, useEffect } from "react";
import { Box, Image, HStack, Circle, useBreakpointValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { logoPrimaryColor } from "../../constants";

const images = [
  "/banner1.jpeg",
  "/banner2.jpeg",
  "/banner3.jpeg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  const carouselHeight = useBreakpointValue({
    base: "50vh",
    md: "65vh",  
    lg: "80vh", 
  });

  return (
    <Box
      position="relative"
      width="100%"
      height={carouselHeight}
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Image Slide Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <HStack
        position="absolute"
        bottom={{ base: "10px", md: "20px", lg: "30px" }}
        left="50%"
        transform="translateX(-50%)"
        spacing={{ base: 2, md: 3 }}
      >
        {images.map((_, index) => (
          <Circle
            key={index}
            size={index === currentIndex ? { base: "25px", md: "30px" } : { base: "10px", md: "12px" }}
            bg={index === currentIndex ? logoPrimaryColor : "white"}
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={() => goToSlide(index)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {index === currentIndex && (
              <Box
                width={{ base: "15px", md: "20px" }}
                height={{ base: "4px", md: "6px" }}
                bg="black"
                borderRadius="full"
              />
            )}
          </Circle>
        ))}
      </HStack>
    </Box>
  );
};

export default Carousel;
