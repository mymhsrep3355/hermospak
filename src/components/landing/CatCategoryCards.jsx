import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import CatCards from "./CatCards";
import SectionHeader from "./SectionHeader";

const CatCategoryCards = () => {
  // Card Data
  const categories = [
    {
      image: "/Cards/cat-kitten.png", // Replace with your image path
      title: "Food for kittens",
      description: "The right diet for every growth phase of young cats",
    },
    {
      image: "/Cards/cat-adult.jpeg", // Replace with your image path
      title: "Food for adult cats",
      description: "So your adult cat has an active and healthy life",
    },
    {
      image: "/Cards/cat-sterlized.jpeg", // Replace with your image path
      title: "Food for senior cats",
      description:
        "Premium quality for the special needs of our older feline friends",
    },
  ];

  return (
    <Box w="100%" mt={4} mb={6} p={{ base: 4, md: 8 }}>
      <SectionHeader
        heading={"Explore Products by Cat Category"}
        subheading={"... cats are our family"}
      />
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        // w={{ base: "100%", md: "100%" }}
        justify="space-between"
        align="center"
        gap={6}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            flex={{ base: "1 1 100%", md: "1 1 calc(33.333% - 16px)" }} // 3 cards in a row for larger screens
          >
            <CatCards
              image={category.image}
              title={category.title}
              description={category.description}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CatCategoryCards;
