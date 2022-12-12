// customised theme
import theme from "./styles/theme";

// @mui dependency
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

// routes
import BaseRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<GlobalStyles styles={{}} />
					<BaseRoutes />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
