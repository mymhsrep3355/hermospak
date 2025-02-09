import React from "react";
import { Box, Flex, Text, Image, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

// Reusable Card Component
const CatCards = ({ image, title, description }) => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={4}
      bg="white" // Solid background for the card
      borderRadius="full"
      boxShadow="lg"
      _hover={{ boxShadow: "md", cursor: "pointer" }}
      transition="all 0.3s ease-in-out"
      maxW="sm"
      w="100%"
    >
      {/* Left Image */}
      <Box>
        <Image
          src={image}
          alt={title}
          boxSize="80px"
          objectFit="contain"
          mr={4}
        />
      </Box>

      {/* Middle Content */}
      <Box flex="1">
        <Text fontWeight="bold" fontSize="lg" color="blue.800" mb={1}>
          {title}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </Box>

      {/* Right Icon */}
      <Box>
        <Icon as={ChevronRightIcon} w={6} h={6} color="gray.500" />
      </Box>
    </Flex>
  );
};

export default CatCards;
