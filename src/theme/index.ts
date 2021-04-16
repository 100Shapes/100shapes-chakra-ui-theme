import { extendTheme } from "@chakra-ui/react";
import colors from "./palette";
import fonts from "./fonts";
import createGlobals from "./global";
import * as components from "./components";

const theme = extendTheme({
  colors,
  components,
  fonts,
  styles: {
    global: (props) => createGlobals(props),
  },
});

export default theme;
