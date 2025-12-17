import { Container } from "lucide-react";
import { useState } from "react";
import { VStack, Heading, Box, Input, Button } from "@chakra-ui/react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: ""
  });

  const handleAddProduct = () => {
    // Logic to add the new product
    console.log("New Product:", newProduct);
    // Reset form
    setNewProduct({ name: "", price: "", image: "" });
  }

  return (
    <Box maxW="container.sm">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>Create Product</Heading>
        
        <Box
        w={"md"}
        p={"6"} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input 
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input 
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input 
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />

            <Button colorScheme="blue" w="full" onClick={handleAddProduct}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default CreatePage
