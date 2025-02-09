import React from "react";
import { Box, Text, Button, Flex, Heading } from "@chakra-ui/react";

const BannerRecommendation = () => {
  return (
    <Box
      position="relative"
      w="100%"
      h={{ base: "300px", md: "400px", lg: "500px" }} // Responsive height
      bgImage="url('/banner-image-recomendation.png')" // Replace with your background image path
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
     
      <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)" // Center the content
        bg="rgba(255, 255, 255, 0.9)" // White semi-transparent background
        p={{ base: 4, md: 6, lg: 8 }} // Padding for the white background box
        borderRadius="md" // Rounded corners for the white background box
        w={{ base: "90%", md: "80%", lg: "70%" }} // Responsive width
        direction={{ base: "column", md: "row" }} // Column for mobile, row for larger screens
        alignItems="center"
        justifyContent="space-between"
        textAlign={{ base: "center", md: "left" }}
        gap={4}
        boxShadow="md"
      >
        {/* Text Section */}
        <Box>
          <Heading
            as="h1"
            size="lg"
            color="red.600"
            fontWeight="bold"
            mb={2}
            lineHeight="short"
          >
            Every pet is unique
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            fontWeight="medium"
          >
            and so are their nutritional needs
          </Text>
        </Box>

        {/* Button */}
        <Button
          size="lg"
          bg="red.600"
          color="white"
          borderRadius="full"
          px={8}
          py={6}
          fontSize={{ base: "sm", md: "md" }}
          _hover={{ bg: "red.500" }}
          transition="background-color 0.3s"
        >
          Get the tailored product
        </Button>
      </Flex>
    </Box>
  );
};

export default BannerRecommendation;
