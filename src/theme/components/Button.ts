import buttonBase from "@chakra-ui/theme/dist/cjs/components/button";
import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "full",
    fontWeight: "semibold",
  },
  sizes: {
    ...buttonBase.sizes,
  },
  variants: {
    ghost: ({ colorMode }) => ({
      color: colorMode === "light" ? `blue.500` : "grey.50",
      _hover: {
        bg: colorMode === "light" ? `pink.50` : "pink.100",
        borderColor: colorMode === "light" ? `blue.400` : "pink.100",
        color: colorMode === "light" ? "grey.700" : "gray.800",
        _disabled: {
          bg: `blue.100`,
        },
      },
    }),
    outline: ({ colorMode }) => ({
      border: "2px solid",
      borderColor: colorMode === "light" ? `blue.500` : "grey.50",
      color: colorMode === "light" ? `blue.500` : "grey.50",
      _hover: {
        bg: colorMode === "light" ? `blue.400` : "pink.100",
        borderColor: colorMode === "light" ? `blue.400` : "pink.100",
        color: colorMode === "light" ? "white" : "gray.800",
        _disabled: {
          bg: `blue.100`,
        },
      },
    }),
    solid: ({ colorMode }) => ({
      bg: colorMode === "light" ? `blue.500` : "grey.50",
      color: colorMode === "light" ? "grey.50" : "gray.800",
      _hover: {
        bg: colorMode === "light" ? `blue.400` : "pink.100",
        _disabled: {
          bg: `blue.100`,
        },
      },
    }),
  },
  defaultProps: {
    ...buttonBase.defaultProps,
    colorScheme: "blue",
    size: "md",
    variant: "solid",
  },
};
