import { createTheme } from '@mui/material/styles';


const themeOptions = 
{
      components:{   
        MuiAppBar:{
          styleOverrides:{
            colorPrimary:{
              backgroundImage:`lightpurple` 
            }
          }
        }
    },

    palette: {
      mode: 'light',
      type: 'light',
      primary: {
        main: '#BE0AFF',
      },
      secondary: {
        main: '#f50057',
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
      divider: '#FF8700',
    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
    },
    
  };

  const theme = createTheme(themeOptions);
  
  export default theme