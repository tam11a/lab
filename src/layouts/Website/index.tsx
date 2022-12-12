import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import WebsiteFooter from "./Footer";
import WebsiteHeader from "./Header";

const WebsiteLayout = () => {
	return (
		<Stack
			direction={"column"}
			sx={{
				height: "100vh",
				overflow: "hidden",
				overflowY: "auto",
			}}
		>
			<WebsiteHeader />
			<Container
				maxWidth={"md"}
				sx={{ flexGrow: 1 }}
			>
				<Outlet />
			</Container>
			<WebsiteFooter />
		</Stack>
	);
};

export default WebsiteLayout;
