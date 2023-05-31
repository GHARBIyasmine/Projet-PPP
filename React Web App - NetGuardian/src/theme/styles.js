import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#FDA7A7",
      200: "#FC8E8E",
      300: "#FC7575",
      400: "#FB5C5C",
      500: "#FA2A2A",
      600: "#EB0606",
      700: "#D30505",
      800: "#BA0404",
      900: "#880303",
    },
    brandScheme: {
      100: "#A7D3FD",
      200: "#8EC7FC",
      300: "#75BBFC",
      400: "#5CAFFB",
      500: "#2A96FA",
      600: "#067DEB",
      700: "#0570D3",
      800: "#0462BA",
      900: "#034888",
    },
    brandTabs: {
      100: "#A7D3FD",
      200: "#8EC7FC",
      300: "#75BBFC",
      400: "#5CAFFB",
      500: "#2A96FA",
      600: "#067DEB",
      700: "#0570D3",
      800: "#0462BA",
      900: "#034888",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437",
    },
    gray: {
      100: "#FAFCFE",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
