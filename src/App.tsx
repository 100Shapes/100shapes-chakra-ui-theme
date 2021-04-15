import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Button,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import theme from "./theme";
import { Header } from "./components/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Box textAlign="center" fontSize="xl">
      <VStack spacing={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Text>
          Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
        </Text>
        <Button colorScheme="blue" size="lg">
          Learn Chakra
        </Button>
      </VStack>
    </Box>
  </ChakraProvider>
);
