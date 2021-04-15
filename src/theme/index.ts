import { extendTheme } from "@chakra-ui/react";
import colors from "./palette";
import * as components from "./components";

const theme = extendTheme({
  colors,
  components,
});

export default theme;
