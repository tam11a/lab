// customised theme
import theme from "./styles/theme";

// @mui dependency
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

// routes
import BaseRoutes from "./routes";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles styles={{}} />
				<BaseRoutes />
			</ThemeProvider>
		</>
	);
}

export default App;
