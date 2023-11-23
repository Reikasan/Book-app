import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        primaryButton: Palette['primary'];
        secondaryButton: Palette['secondary'];
    }
  
    interface PaletteOptions {
        primaryButton?: PaletteOptions['primary'];
        secondaryButton?: PaletteOptions['secondary'];
    }
  }
  
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        primaryButton: true;
        secondaryButton: true;
    }
  }
  
const theme = createTheme({
    palette: {
        primary: {
            main: '#F76F72',
        },
        secondary: {
            main: '#FDFFFC',
        },
        primaryButton: {
            main: '#F76F72',
            light: '#FCA1A1',
            dark: '#FA4245',
            contrastText: '#FDFFFC',
        },
        secondaryButton: {
            main: '#FDFFFC',
            light: '#FCA1A1',
            dark: '#F76F72',
            contrastText: '#F76F72',
        },
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
                borderRadius: '0px',
            },
            outlined: {
              borderColor: '#F76F72', 
            },
          },
        },
      },
});

export default theme;