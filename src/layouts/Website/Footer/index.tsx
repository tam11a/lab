import { Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router";

const WebsiteFooter = () => {
	return (
		<Routes>
			<Route
				path={"/"}
				element={<Footer />}
			/>
		</Routes>
	);
};

const Footer = () => {
	return (
		<Stack>
			<Typography
				variant="caption"
				sx={{
					py: 1,
					textAlign: "center",
					"& b, & a": {
						color: "primary.main",
						textDecoration: "none",
						fontWeight: "bold",
					},
				}}
			>
				Powered by{" "}
				<a
					href={"https://github.com/tam11a"}
					target={"_blank"}
				>
					Tam11a
				</a>
			</Typography>
		</Stack>
	);
};

export default WebsiteFooter;
