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
        maxW="1200px"
        mx="auto"
      >
        {/* Logo */}
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
              fontSize="md" // Slightly larger font size for links
              fontWeight="medium"
              color="gray.600"
              _hover={{ textDecoration: "none", color: "black" }}
              transition="color 0.3s ease"
            >
              {link}
            </Link>
          ))}
          <Button
            as={motion.a}
            href="#contact"
            size="md"
            bg="#C02232"
            color="white"
            borderRadius="full"
            px={8}
            fontSize="md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </Button>
        </HStack>

        <IconButton
          size="lg"
          icon={<FaPaw />} // The FaPaw icon
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onOpen}
          bg="#C02232" // Red background
          color="white" // White icon
          _hover={{ bg: "#a81b28" }} // Darker red on hover
          _active={{ bg: "#80111c" }} // Even darker red on click
         
          fontSize="1.5rem" // Set icon font size explicitly
          justifyContent="center" // Center icon horizontally
          alignItems="center" // Center icon vertically
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
                bg="#C02232"
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
