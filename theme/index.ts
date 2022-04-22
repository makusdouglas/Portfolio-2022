import {
  Theme,
  extendTheme,
  theme as chakraTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme: Theme = {
  ...chakraTheme,
  config: {
    ...chakraTheme.config,
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    ...chakraTheme.fonts,
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
};
const colors = {
  CARD_BACKGROUND: "#283045",
  BACKGROUND: "#161e30",
  PRIMARY_COLOR: theme.colors.purple[100],
  ACCENT_COLOR: "#06E609",
};

export const appTheme = extendTheme(
  theme,
  {
    colors,
    styles: {
      global: (props: any) => ({
        body: {
          bg: mode(theme.colors.white, colors.BACKGROUND)(props),
        },
      }),
    },
  },
  withDefaultColorScheme({
    colorScheme: "purple",
  })
);
