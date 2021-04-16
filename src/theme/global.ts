import { GlobalStyleProps } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const globalStyles = (props: GlobalStyleProps) => ({
  "html, body": {
    fontFamily: "body",
    color: mode("grey.800", "whiteAlpha.900")(props),
    bg: mode("white", "gray.800")(props),
    lineHeight: "base",
  },
  "*::placeholder": {
    color: mode("gray.400", "whiteAlpha.400")(props),
  },
  "*::selection": {
    color: "grey.800",
    bg: "pink.50",
  },
  "*, *::before, &::after": {
    borderColor: mode("gray.200", "whiteAlpha.300")(props),
    wordWrap: "break-word",
  },
  fontFeatureSettings: `"pnum"`,
  fontVariantNumeric: "proportional-nums",
});

export default globalStyles;
