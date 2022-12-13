// customised theme
import theme from "./styles/theme";

// @mui dependency
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

// routes
import BaseRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// access-list
import { AccessProvider } from "@tam11a/react-use-access";

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<AccessProvider
				permissions={["showHello"]}
				// fallback={<>It's from default</>}
			>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<GlobalStyles styles={{}} />
						<BaseRoutes />
					</ThemeProvider>
				</QueryClientProvider>
			</AccessProvider>
		</>
	);
}

export default App;
