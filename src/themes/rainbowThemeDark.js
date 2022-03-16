import { createTheme } from '@mui/material/styles';

const themeOptions = 
{
      components:{   
        MuiAppBar:{
          styleOverrides:{
            colorPrimary:{
              backgroundImage:`darkpurple` 
            }
          }
        }
    },

    palette: {
      type: 'dark',
      mode:'dark',
      primary: {
        main: '#f50057',
      },
      secondary: {
        main: '#BE0AFF',
      },
      warning: {
        main: '#DEFF0A',
      },
      info: {
        main: '#147DF5',
      },
      success: {
        main: '#A1FF0A',
      },
      background: {
        paper: '#BD2C16',
        default: '#4E0D14',
      },
      divider: '#FF8700',
    },
    typography: {
      caption: {
        fontSize: '6rem',
      },
      button: {
        fontWeight: 500,
      },
    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
    },
    
  };

  const theme = createTheme(themeOptions);
  export default theme