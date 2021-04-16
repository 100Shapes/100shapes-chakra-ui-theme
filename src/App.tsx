import * as React from "react";
import {
  ChakraProvider,
  Text,
  HStack,
  Code,
  Button,
  Heading,
  Container,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import theme from "./theme";
import { Header } from "./components/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Container>
      <Logo h="40vmin" pointerEvents="none" />
      <Text>
        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
      </Text>
      <hr />

      <VStack spacing={4}>
        <Heading letterSpacing="widest" as="h1">
          Buttons
        </Heading>
        <Heading as="h2" fontSize="xxx-large">
          Buttons
        </Heading>
        <HStack spacing={4}>
          <Button size="lg" variant="ghost">
            Learn Chakra
          </Button>
          <Button variant="ghost">Learn Chakra</Button>
          <Button size="sm" variant="ghost">
            Learn Chakra
          </Button>
        </HStack>
        <HStack spacing={4}>
          <Button size="lg" variant="outline">
            Learn Chakra
          </Button>
          <Button variant="outline">Learn Chakra</Button>
          <Button size="sm" variant="outline">
            Learn Chakra
          </Button>
        </HStack>
        <HStack spacing={4}>
          <Button size="lg">Learn Chakra</Button>
          <Button>Learn Chakra</Button>
          <Button size="sm">Learn Chakra</Button>
        </HStack>
      </VStack>
    </Container>
  </ChakraProvider>
);
