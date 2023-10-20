import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const theme = useMemo(()=> createTheme(themeSettings), [])
  return <div className='app'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      Hi!!
    </ThemeProvider>
  </div>
}

export default App;
