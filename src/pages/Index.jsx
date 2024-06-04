import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="#003366" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">News</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
            <Link href="#" color="white">More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Main Article */}
        <Box flex="3" mr={{ md: 4 }}>
          <Box bg="#F3F3F3" p={4} mb={4}>
            <Heading as="h2" size="xl" mb={2}>Prominent Headline Article</Heading>
            <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
          {/* Smaller Articles */}
          <VStack spacing={4}>
            <Box bg="#F3F3F3" p={4}>
              <Heading as="h3" size="md" mb={2}>Smaller Article 1</Heading>
              <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box bg="#F3F3F3" p={4}>
              <Heading as="h3" size="md" mb={2}>Smaller Article 2</Heading>
              <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box bg="#F3F3F3" p={4}>
              <Heading as="h3" size="md" mb={2}>Smaller Article 3</Heading>
              <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="#EDEDED" p={4} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <VStack spacing={4}>
            <Link href="#">Additional Link 1</Link>
            <Link href="#">Additional Link 2</Link>
            <Link href="#">Additional Link 3</Link>
            <Link href="#">Advertisement</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="#003366" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
          <HStack spacing={4}>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;