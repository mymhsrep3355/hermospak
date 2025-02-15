import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import Cart from "./Cart";
import { logoPrimaryColor } from "../../constants";

const Navbar = ({ menuLinks }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const menuLinks = ["Private label", "Brands", "About us", "News", "Vacancies"];
  return (
    <Box
      as={motion.nav}
      bg="white"
      boxShadow="md"
      py={6}
      px={4}
      position="sticky"
      top="0"
      zIndex="1000"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 11 }}
      w="100%"
    >
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between"
        // maxW="1200px"
        maxW={"100%"}
        mx="auto"
      >
        <HStack>
          <Image
            as={motion.img}
            src="/logo.png"
            alt="Vobra Logo"
            height="80px" // Increased logo size
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </HStack>
        <HStack spacing={10} display={{ base: "none", md: "flex" }}>
          {menuLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              fontSize="md"
              fontWeight="medium"
              color="gray.600"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: "0",
                width: "0",
                height: "2px",
                bg: "#C02232", // Animated line color
                transition: "width 0.3s ease-in-out",
              }}
              _hover={{
                _after: {
                  width: "100%", // Expand the line on hover
                },
              }}
            >
              {link}
            </Link>
          ))}
          <Button
            as={motion.a}
            href="#contact"
            size="md"
            bg={logoPrimaryColor}
            color="white"
            borderRadius="full"
            px={8}
            fontSize="md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </Button>
          {/* <Cart/> */}
        </HStack>

        <IconButton
          size="lg"
          icon={<FaPaw style={{marginLeft: "10px"}} />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onOpen}
          bg={logoPrimaryColor}// Red background
          color="white" // White icon
          _hover={{ bg: "#a81b28" }} 
          _active={{ bg: "#80111c" }}
         
          fontSize="1.5rem" 
          justifyContent="center" 
          alignItems="center" 
        />
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        bg="transparent"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt={8}>
              {menuLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  fontSize="lg"
                  fontWeight="medium"
                  color="gray.600"
                  _hover={{ textDecoration: "none", color: "black" }}
                  onClick={onClose}
                >
                  {link}
                </Link>
              ))}
              <Button
                as="a"
                href="#contact"
                size="lg"
                bg={logoPrimaryColor}
                color="white"
                borderRadius="full"
                px={8}
                fontSize="lg"
                onClick={onClose}
              >
                Contact
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
