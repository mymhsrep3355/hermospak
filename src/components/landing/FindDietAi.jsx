import { Box, Flex, Text, Button, Image, VStack } from "@chakra-ui/react";

const FindDietAi = () => {
  return (
    <Box
      bgGradient="linear(to-r, #ffffff, rgb(168, 215, 240))"
      py={{ base: 6, md: 10 }}
      px={{ base: 4, md: 16 }}
      position="relative"
      height={{ base: "auto", md: "500px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        height="100%"
      >
        {/* Left Section - Cat Image */}
        <Box
          flex="1"
          display="flex"
          justifyContent={{ base: "center", md: "flex-start" }}
          maxW={{ base: "300px", md: "400px" }}
        >
          <Image
            src="/paws.png"
            alt="Cat"
            objectFit="contain"
            height={{ base: "220px", md: "100%" }}
            maxH={{ base: "250px", md: "500px" }}
          />
        </Box>

        {/* Right Section - Text & Button */}
        <VStack
          align="flex-start"
          flex="1"
          spacing={6}
          maxW="600px"
          textAlign={{ base: "center", md: "left" }}
          ml={{ md: 10 }}
        >
          <Text
            fontSize={{ base: "5xl", md: "7xl" }}
            fontWeight="extrabold"
            color="#003A94"
            lineHeight="1.2"
            textTransform="capitalize"
          >
            Let's Get <br /> Your Pet Started
          </Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} color="#001F3F" fontWeight="semibold">
            on the right plan now.
          </Text>
          <Button
            bg="#003A94"
            color="white"
            size="lg"
            px={6}
            py={5}
            borderRadius="md"
            _hover={{ bg: "#002b6e" }}
            fontWeight="medium"
            fontSize="md"
          >
            Find Your Formula
          </Button>
        </VStack>
      </Flex>

      <Box
        position="absolute"
        bottom="30px"
        right="30px"
        zIndex="1000"
      >
        <Image
          src="/b-cat.png"
          alt="Paw Prints"
          height={{ base: "80px", md: "100px" }}
          opacity={1}
        />
      </Box>
    </Box>
  );
};

export default FindDietAi;
