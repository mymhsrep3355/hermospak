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
      bgGradient="linear(to-l, #ffffff, rgb(168, 215, 240))"
      py={{ base: 10, md: 16 }}
      px={{ base: 6, md: 12 }}
      maxW="100%"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={{ base: 6, lg: 12 }}
      >
        {/* Left Section: Image */}
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
            src="/banner-our-brands-1.png" // Replace with the path to your banner image
            alt="Our Brands"
            objectFit="contain"
            maxW={{ base: "100%", md: "70%" }}
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
            fontSize={{ base: "5xl", md: "7xl" }}
            fontWeight="extrabold"
            color="#003A94"
            lineHeight="1.2"
            textTransform="capitalize"
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            // color={logoPrimaryColor}
            mb={5}
            // fontWeight="bold"
            // lineHeight="short"
          >
            Proven quality with <br /> our own brands
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            lineHeight="tall"
            mb={6}
            maxW="600px"
            mx={{ base: "auto", lg: "0" }}
          >
            With our own successful brands PawPaw, Benefit, Klicker, and Impress
            Your Dog, we are represented in every segment of the market. We have
            market knowledge of both the pet stores and the veterinary market.
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
            boxShadow="md"
          >
            Our brands
          </MotionButton>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default OurBrands;
