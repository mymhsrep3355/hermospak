import React, { useState } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Text,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 20.0,
      image: "/example-product.jpg", // Replace with your product image path
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.0,
      image: "/example-product.jpg", // Replace with your product image path
    },
    {
      id: 3,
      name: "Product 3",
      price: 30.0,
      image: "/example-product.jpg", // Replace with your product image path
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {/* Add to Cart Button */}
      <Button
        leftIcon={<FaShoppingCart style={{ marginLeft: "2px" }} />}
        size="md"
        bg="#C02232"
        color="white"
        borderRadius="full"
        fontSize="md"
        onClick={onOpen}
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        _hover={{ bg: "#a81b28" }}
        _active={{ bg: "#80111c" }}
      >
        Cart ({cartItems.length})
      </Button>

      {/* Cart Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Your Cart</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {/* Render Cart Items */}
              {cartItems.map((item) => (
                <HStack
                  key={item.id}
                  justifyContent="space-between"
                  borderBottom="1px solid #E2E8F0"
                  pb={2}
                  mb={2}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    boxSize="50px"
                    borderRadius="md"
                  />
                  <Box flex="1" ml={3}>
                    <Text fontWeight="bold">{item.name}</Text>
                  </Box>
                  <Text fontWeight="bold">${item.price.toFixed(2)}</Text>
                </HStack>
              ))}

              {/* Total Price */}
              <HStack justifyContent="space-between" mt={4} fontWeight="bold">
                <Text>Total:</Text>
                <Text>${totalPrice.toFixed(2)}</Text>
              </HStack>

              {/* Checkout Button */}
              <Button
                size="lg"
                bg="#C02232"
                color="white"
                borderRadius="full"
                mt={6}
                _hover={{ bg: "#a81b28" }}
                _active={{ bg: "#80111c" }}
              >
                Proceed to Checkout
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
