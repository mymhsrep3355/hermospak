import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Link,
  Button,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <Box bg="#FFD700" color="black" py={10} px={{ base: 4, md: 10 }}>
      <VStack spacing={8} align="stretch" maxW="1200px" mx="auto">
        {/* Contact Section */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 0 }}
        >
          <HStack spacing={4}>
            <Text fontWeight="bold" fontSize="lg">
              Contact us:
            </Text>
            <Button
              leftIcon={<BiMessageRounded />}
              bg="black"
              color="white"
              _hover={{ bg: "gray.700" }}
              borderRadius="full"
              px={6}
            >
              Write a message
            </Button>
            <Button
              leftIcon={<FiPhoneCall />}
              bg="black"
              color="white"
              _hover={{ bg: "gray.700" }}
              borderRadius="full"
              px={6}
            >
              Call
            </Button>
          </HStack>
          <HStack spacing={4}>
            <Text fontWeight="bold" fontSize="lg">
              Follow us:
            </Text>
            <Link href="#" isExternal>
              <Icon as={FaFacebook} w={6} h={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaYoutube} w={6} h={6} />
            </Link>
          </HStack>
        </Flex>

        <Divider borderColor="black" />

        {/* Footer Links and Address */}
        <Flex
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 0 }}
        >
          {/* Left Section: Services and Responsibility */}
          <Flex
            justifyContent="space-between"
            w="100%"
            maxW="700px"
            gap={12}
            direction={{ base: "column", sm: "row" }}
          >
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" fontSize="md">
                SERVICE
              </Text>
              <Link href="#">Advisory</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Supplier registration</Link>
              <Link href="#">Imprint</Link>
              <Link href="#">Privacy Policy</Link>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" fontSize="md">
                RESPONSIBILITY
              </Text>
              <Link href="#">Sustainability</Link>
              <Link href="#">About us</Link>
              <Link href="#">Quality</Link>
            </VStack>
          </Flex>

          {/* Right Section: Address */}
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold" fontSize="md">
              JOSERA PETFOOD GMBH & CO.KG
            </Text>
            <Text>Industriegebiet Süd</Text>
            <Text>DE-63924 Kleinheubach</Text>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;
