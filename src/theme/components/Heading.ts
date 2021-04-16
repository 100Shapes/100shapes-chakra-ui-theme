import { mergeWith as merge } from "@chakra-ui/utils";
import headingBase from "@chakra-ui/theme/dist/cjs/components/heading";
import { ComponentStyleConfig } from "@chakra-ui/react";

const overrides: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 600,
    letterSpacing: `-${1 / 16}rem`,
  },
  defaultProps: {},
};

export const Heading = merge(headingBase, overrides);
