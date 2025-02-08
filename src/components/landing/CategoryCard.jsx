import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion components
const MotionBox = motion(Box);

const CategoryCard = ({ image, title, subtitle }) => {
  return (
    <MotionBox
      position="relative"
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
      cursor="pointer"
      whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
      initial={{ opacity: 0, y: 50 }} // Animation on load
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        w="100%"
        h="100%"
        objectFit="cover"
        transition="transform 0.5s ease"
      />

      {/* Overlay */}
      <MotionBox
        position="absolute"
        bottom="0"
        w="100%"
        h="30%" // Initial height of the overlay
        bg="rgba(0, 0, 0, 0.6)"
        color="white"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        initial={{ height: "30%" }} // Default partial overlay
        whileHover={{ height: "100%" }} // Expand overlay on hover
        transition={{ duration: 0.5 }} // Smooth expansion
      >
        <Text
          fontSize="sm"
          fontWeight="bold"
          letterSpacing="wide"
          opacity={0.8} // Slightly transparent subtitle
        >
          {subtitle}
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          mt={2}
          initial={{ opacity: 0, y: 10 }} // Text animates in
          whileHover={{ opacity: 1, y: 0 }} // Fade in and rise on hover
          transition={{ duration: 0.3 }}
        >
          {title}
        </Text>
      </MotionBox>
    </MotionBox>
  );
};

const Category = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={6}
      px={{ base: 4, md: 8 }}
      py={10}
      justify="center"
    >
      {/* Category 1 */}
      <CategoryCard
        image="/cat-ff1.jpg" // Replace with your cat image path
        title="CATS"
        subtitle="OUR FOODS"
      />

      {/* Category 2 */}
      <CategoryCard
        image="/dog-ff1.jpg" // Replace with your dog image path
        title="DOGS"
        subtitle="OUR FOODS"
      />
    </Flex>
  );
};

export default Category;
