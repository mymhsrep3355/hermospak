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
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ProductLine = () => {
  return (
    <Box
      w="100%"
      minH="100vh"
      // bgImage="url('https://images.unsplash.com/photo-1698920680045-0f786dd1380c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" // Background image
      bgSize="cover"
      bgImage={`url('/BrandLine-bg.png')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={8}
    >
      <Box
        w="100%"
        maxW="1200px"
        bg="rgba(255, 255, 255, 0.1)" // Glassy effect
        backdropFilter="blur(10px)"
        // borderRadius="full"
        // boxShadow="xl"
        display="flex"
        flexDirection={{ base: "column", lg: "row" }} // Responsive layout
        p={8}
        gap={8}
      >
        {/* Left Section: Product Info */}
        <VStack
          spacing={4}
          flex="1"
          textAlign={{ base: "center", lg: "left" }}
          align={{ base: "center", lg: "flex-start" }}
          justify="center"
        >
          {/* Brand Title */}
          <Text
            fontSize={{ base: "3xl", md: "6xl" }}
            fontWeight="extrabold"
            color="#003A94"
            lineHeight="1.2"
            textTransform="capitalize"
            as="h1"
            size={{ base: "xl", md: "2xl" }}
          >
            Hermos Pakistan
          </Text>

          {/* Main Heading */}
          <Heading
            as="h1"
            // fontFamily="'Meow Script', cursive"
            fontSize={{ base: "3xl", md: "54xl" }}
            fontWeight="extrabold"
            textTransform={"capitalize"}
            color="#003366"
          >
            Product Line
          </Heading>

          {/* Feature List */}
          <VStack
            spacing={4}
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <HStack spacing={3}>
              <Icon as={CheckCircleIcon} color="blue.500" boxSize={6} />
              <Text fontSize="lg" color="gray.600" fontWeight={500}>
                The Hermos Culinary range offers a varied and gastronomic
                selection for real little gourmets and meat lovers.
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={CheckCircleIcon} color="blue.500" boxSize={6} />
              <Text fontSize="lg" color="gray.600" fontWeight={500}>
                The exclusive preparations with high-grade animal proteins help
                to maintain a healthy life full of vitality right into old age.
              </Text>
            </HStack>
          </VStack>

          {/* Call-to-Action Button */}
          <Button
            size="lg"
            bg="#003366"
            color="white"
            borderRadius="full"
            px={8}
            py={6}
            fontSize="md"
            mt={4}
            _hover={{ bg: "#00509e" }}
          >
            Try Now
          </Button>
        </VStack>

        {/* Right Section: Product Image */}
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/productLine.png" // Replace with your product image path
            alt="Happy Cat Products"
            maxW="100%"
            objectFit="contain"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLine;
