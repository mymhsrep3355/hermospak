import React from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { logoPrimaryColor } from "../../constants";

// Motion components
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

const OurBrands = () => {
  return (
    <Box
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 8 }}
      maxW={{ base: "100%", lg: "100%" }}
      mx="auto"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={{ base: 6, lg: 12 }}
      >
        {/* Left Section: Banner Image with Animation */}
        <MotionBox
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="100%"
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and position
          transition={{ duration: 1 }} // Duration of the animation
        >
          <MotionImage
            src="/Logos-banner.png" // Replace with the path to your banner image
            alt="Our Brands"
            objectFit="contain"
            maxW={{ base: "100%", md: "80%" }}
            whileHover={{ scale: 1.05 }} // Slight scale effect on hover
            transition={{ duration: 0.3 }}
          />
        </MotionBox>

        {/* Right Section: Text Content with Animation */}
        <MotionBox
          flex="1"
          textAlign={{ base: "center", lg: "left" }}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and position
          transition={{ duration: 1, delay: 0.5 }} // Add delay for a smooth effect
        >
          <Heading
            as="h1"
            size="xl"
            color={logoPrimaryColor}
            mb={4}
            fontWeight="bold"
            lineHeight="short"
          >
            Proven quality with <br /> our own brands
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            lineHeight="tall"
            mb={6}
            maxW="600px"
            mx={{ base: "auto", lg: "0" }}
          >
            With our own successful brands PawPaw, Benefit, Klicker, and
            Impress Your Dog, we are represented in every segment of the market.
            We have market knowledge of both the pet stores and the veterinary
            market.
          </Text>
          {/* Button with Delayed Animation */}
          <MotionButton
            size="lg"
            bg={logoPrimaryColor}
            color="white"
            borderRadius="full"
            px={8}
            fontSize="md"
            _hover={{ bg: "#a81b28" }}
            initial={{ opacity: 0 }} // Button starts invisible
            animate={{ opacity: 1 }} // Fades in
            transition={{ duration: 0.8, delay: 1 }} // Button appears after text
          >
            Our brands
          </MotionButton>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default OurBrands;
