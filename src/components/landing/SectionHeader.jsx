import React from "react";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa"; // Replace with an icon similar to the design

const SectionHeader = ({heading, subheading}) => {
  return (
    <Box textAlign="center" py={6} px={4}>
      {/* Main Heading */}
      <Heading
        as="h1"
        fontFamily="'Meow Script', cursive" 
        color="#003366" // Dark blue color
        fontSize={{ base: "4xl", md: "6xl" }} // Responsive font size
        fontWeight="bold"
        mb={2}
      >
        {heading}
      </Heading>

      {/* Subheading with Icon */}
      <Text
        fontSize={{ base: "sm", md: "xl" }}
        color="#85a5cc" // Lighter blue color
        fontWeight="medium"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        {/* Icon */}
        <Icon
          as={FaPaw} // Replace with a paw or bowl icon
          color="#85a5cc"
          fontSize="1.5rem"
        />
       {subheading}
      </Text>
    </Box>
  );
};

export default SectionHeader;
