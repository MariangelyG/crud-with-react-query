import { QueryClient, QueryClientProvider } from "react-query"
import { AppRouter } from "./routes/AppRouter"
import {ReactQueryDevtools} from "react-query/devtools"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";




export const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Josefin Sans, sans-serif"
    },
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: {
    //       body: {
    //         backgroundColor: '#314047',
           
    //       },
    //     },
    //   },
    // },
  });
 

  const queryClient = new QueryClient 

  return (
   <ThemeProvider theme={theme}>
  <CssBaseline/>
      <QueryClientProvider client={queryClient}>
          <AppRouter/>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
   </ThemeProvider>
  
  )
}
