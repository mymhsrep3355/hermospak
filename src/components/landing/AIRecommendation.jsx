import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Image,
  Circle,
} from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";

const AIRecommendationSection = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#F4F4F4"
      px={{ base: 4, md: 8 }}
    >
      <Box
        w="100%"
        maxW={{ base: "95%", sm: "90%", md: "80%", lg: "100%" }}
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
        p={{ base: 6, md: 8, lg: 10 }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={6}
      >
        {/* Left Section: Image */}
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
          <Image
            src="/ai-recommendation-img.png" // Replace with your image path
            alt="Pet Recommendation"
            borderRadius="lg"
            objectFit="contain"
            maxW="100%"
            h={{ base: "200px", md: "250px", lg: "300px" }} // Responsive height
          />
        </Box>

        {/* Right Section: Text & Content */}
        <Box
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          {/* Time Icon and Label */}
          <HStack
            spacing={2}
            mb={4}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Icon as={FaClock} color="gray.500" boxSize={{ base: 4, md: 5 }} />
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color="gray.600"
              fontWeight="medium"
            >
              3 minutes
            </Text>
          </HStack>

          {/* Main Heading */}
          <Heading
            as="h2"
            fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="gray.800"
            lineHeight="short"
            mb={4}
          >
            Find the right product
          </Heading>

          {/* Steps List */}
          <HStack
            spacing={6}
            mb={6}
            flexWrap="wrap"
            justify={{ base: "center", md: "flex-start" }}
          >
            <VStack spacing={2} align="center" w={{ base: "100px", md: "120px" }}>
              <Circle
                size={{ base: "30px", md: "40px" }}
                bg="black"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "md", md: "lg" }}
              >
                1
              </Circle>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="gray.600"
                textAlign="center"
              >
                Answer questions about your pet
              </Text>
            </VStack>
            <VStack spacing={2} align="center" w={{ base: "100px", md: "120px" }}>
              <Circle
                size={{ base: "30px", md: "40px" }}
                bg="black"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "md", md: "lg" }}
              >
                2
              </Circle>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="gray.600"
                textAlign="center"
              >
                Get a tailored recommendation
              </Text>
            </VStack>
            <VStack spacing={2} align="center" w={{ base: "100px", md: "120px" }}>
              <Circle
                size={{ base: "30px", md: "40px" }}
                bg="black"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "md", md: "lg" }}
              >
                3
              </Circle>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="gray.600"
                textAlign="center"
              >
                Unlock your pet's health follow up
              </Text>
            </VStack>
          </HStack>

          {/* Call-to-Action Button */}
          <Button
            size="lg"
            bg="red.600"
            color="white"
            borderRadius="full"
            px={8}  
            py={6}
            fontWeight="bold"
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ bg: "red.700" }}
            alignSelf={{ base: "center", md: "flex-start" }}
          >
            Get tailored food
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AIRecommendationSection;
