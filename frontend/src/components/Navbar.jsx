import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <Container maxW="100%" px={6}>
      <Flex
        h="60px"
        alignItems="center"
        justifyContent="space-between"
      >

        <Text
          fontSize="lg"
          fontWeight="bold"
          color="cyan.400"
          letterSpacing="wide"
          textAlign="center"
        >
          <Link to="/">PRODUCT STORE 🛒</Link>
        </Text>

        {/* Right button */}
        <Flex flex="1" justifyContent="flex-end">
          <Link to="/create">
            <Button size="sm" bg="gray.700" _hover={{ bg: "gray.600" }}>
              <Plus size={18} />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
