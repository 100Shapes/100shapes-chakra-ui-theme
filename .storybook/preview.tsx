import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";
import theme from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <ChakraProvider theme={theme}>{story()}</ChakraProvider>
));
