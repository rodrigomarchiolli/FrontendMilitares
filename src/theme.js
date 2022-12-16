import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
      },
      //greenAccent
      primary: {
        100: "#041a09",
        200: "#093312",
        300: "#0d4d1b",
        400: "#126624",
        500: "#16802d",
        600: "#459957",
        700: "#73b381",
        800: "#a2ccab",
        900: "#d0e6d5",
      },
      //primary
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      blueAccent: {
        100: "#d3eafd",
        200: "#a6d5fa",
        300: "#7ac0f8",
        400: "#4dabf5",
        500: "#2196f3",
        600: "#1a78c2",
        700: "#145a92",
        800: "#0d3c61",
        900: "#071e31"
      },
      orangeAccent: {
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100'
      },
      yellowAccent: {
        100: "#fffbd8",
        200: "#fff7b1",
        300: "#fff389",
        400: "#ffef62",
        500: "#ffeb3b",
        600: "#ccbc2f",
        700: "#998d23",
        800: "#665e18",
        900: "#332f0c"
      },


    }
    : {
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
      //greenAccent
      primary: {
        100: "#d0e6d5",
        200: "#a2ccab",
        300: "#73b381",
        400: "#73b381",
        500: "#a2ccab",
        600: "#126624",
        700: "#0d4d1b",
        800: "#093312",
        900: "#041a09"
      },
      //primary
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        800: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#424549",
        300: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blblueAccent: {
        100: "#071e31",
        200: "#0d3c61",
        300: "#145a92",
        400: "#1a78c2",
        500: "#2196f3",
        600: "#4dabf5",
        700: "#7ac0f8",
        800: "#a6d5fa",
        900: "#d3eafd",

      },
      orangeAccent: {
        100: '#e65100',
        200: '#ef6c00',
        300: '#f57c00',
        400: '#fb8c00',
        500: '#ff9800',
        600: '#ffa726',
        700: '#ffb74d',
        800: '#ffcc80',
        900: '#ffe0b2'
      },
      yellowAccent: {
        100: "#332f0c",
        200: "#665e18",
        300: "#998d23",
        400: "#ccbc2f",
        500: "#ffeb3b",
        600: "#ffef62",
        700: "#fff389",
        800: "#fff7b1",
        900: "#fffbd8",
      },

    }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.primary[300],
          },
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.primary[100],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.primary[500],
          },
        }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
