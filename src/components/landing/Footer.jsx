import { Box, Flex, Text, Link, Icon, VStack, HStack, Image, Spacer } from "@chakra-ui/react";
import { FaPhone, FaLinkedin, FaPinterest, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";


const dogLinks = [
  { label: "Find Hermos", url: "#" },
  { label: "Our history", url: "#" },
  { label: "Quality and Development", url: "#" },
  { label: "Sustainability", url: "#" },
  // { label: "Food Fighters", url: "#" },
  { label: "Our brands", url: "#" },
  { label: "News", url: "#" },
  { label: "Distributors", url: "#" },
  { label: "Contact", url: "#" },
];


const catLinks = [
  { label: "Paw-Paw", url: "#" },
  { label: "Klicker", url: "#" },
  { label: "Benefit", url: "#" },
  // { label: "Monge's word", url: "#" },
  { label: "The vet speaks loud and clear", url: "#" },
  { label: "A family that goes woof", url: "#" },
  { label: "A family that goes meow", url: "#" },
  { label: "Are you a breeder?", url: "#", isBold: true },
  { label: "Discover more about us", url: "#" },
];

// Data for Social Media Icons
const socialLinks = [
  { icon: FaLinkedin, url: "#" },
  { icon: FaPinterest, url: "#" },
  { icon: FaFacebook, url: "#" },
  { icon: FaYoutube, url: "#" },
  { icon: FaInstagram, url: "#" },
];

const Footer = () => {
  return (
    <Box bg="#162a65" color="white" py={10} px={{ base: 4, md: 8 }}>
      
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        maxW="1200px"
        mx="auto"
        gap={{ base: 6, md: 0 }}
      >
        
        <VStack align="flex-start" spacing={4} minW="220px">
          <Image src="logo.png" alt="Monge Logo" width="180px" mb={2} />
          <Text fontWeight="bold" fontSize="sm">Monge & C. S.p.a.</Text>
          <Text fontSize="sm">Via Savigliano, 31</Text>
          <Text fontSize="sm">12030 Monasterolo di Savigliano (CN)</Text>
          <Text fontSize="sm">tel. +39 0172 74 71 11</Text>
          <Text fontSize="sm">fax +39 0172 74 71 99</Text>
        </VStack>

        {/* Center Section - Links */}
        <Flex flex={1} justify="center" gap={12}>
          {/* Dog Links */}
          <VStack align="flex-start" spacing={2}>
          <Image src="/cane_eta_adulto.png" alt="Monge Logo" width="180px" mb={2}/>
            <Text fontWeight="bold" mb={2}>Dog</Text>
            {dogLinks.map((link, index) => (
              <Link key={index} href={link.url} fontSize="sm" _hover={{ textDecor: "underline" }}>
                {link.label}
              </Link>
            ))}
          </VStack>

          {/* Cat Links */}
          <VStack align="flex-start" spacing={2}>
          <Image src="/gatto_eta_adulto.png" alt="Monge Logo" width="180px" mb={2}/>
            <Text fontWeight="bold" mb={2}>Cat</Text>
            {catLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                fontSize="sm"
                fontWeight={link.isBold ? "bold" : "normal"}
                _hover={{ textDecor: "underline" }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>
        </Flex>

        {/* Right Section - Toll-free number and Social Media */}
        <VStack align="flex-start" spacing={4} minW="220px">
          <Text fontWeight="bold" fontSize="sm">Toll-free customer</Text>
          <Flex
            bg="white"
            color="#162a65"
            border="2px solid #4CAF50"
            borderRadius="md"
            align="center"
            px={5}
            py={2}
            boxShadow="lg"
            mb={2}
          >
            <Icon as={FaPhone} color="green.500" mr={3} />
            <Text fontWeight="bold" fontSize="xl">+92012345678</Text>
          </Flex>
          

          {/* Social Media Icons */}
          <HStack spacing={4} mt={2}>
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.url} aria-label={`social-${index}`}>
                <Icon as={social.icon} boxSize={6} />
              </Link>
            ))}
          </HStack>
        </VStack>
      </Flex>

      {/* Bottom Section */}
      {/* <Flex justify="center" mt={6}>
        <Image src="/assets/footer-logos.png" alt="Footer Logos" width="350px" />
      </Flex> */}
    </Box>
  );
};

export default Footer;
