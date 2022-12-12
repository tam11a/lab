import React from "react";
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	Hidden,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

import { ImLab } from "react-icons/im";
import { TbExternalLink } from "react-icons/tb";
import { BsMenuUp } from "react-icons/bs";
import { FaNpm } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const WebsiteHeader = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<AppBar>
				<Toolbar
					sx={{
						bgcolor: (theme) => theme.palette.background.paper,
					}}
				>
					<Container
						maxWidth={"lg"}
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							columnGap: "0.7rem",
							justifyContent: "space-between",
						}}
					>
						<Avatar
							src={"/favicon.png"}
							component={Link}
							to={"/"}
							variant={"square"}
							sx={{
								height: "35px",
								width: "fit-content",
							}}
						/>
						<ListItemText
							primary={"Tam's Lab"}
							secondary={"React Laboratory"}
							secondaryTypographyProps={{
								color: "secondary.dark",
							}}
						/>
						<Hidden smDown>
							<IconButton
								color="primary"
								component={Link}
								to={"/room"}
							>
								<ImLab />
							</IconButton>
							<IconButton color="secondary">
								<FiGithub />
							</IconButton>
							<IconButton color="error">
								<FaNpm />
							</IconButton>
						</Hidden>
						<Hidden smUp>
							<IconButton
								color={"primary"}
								onClick={handleClick}
							>
								<BsMenuUp />
							</IconButton>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								PaperProps={{
									sx: {
										width: "50vw",
										maxWidth: "12rem",
										mt: 2.5,
										overflow: "visible",
										"&:before": {
											content: '""',
											display: "block",
											position: "absolute",
											top: 0,
											right: 30,
											width: 10,
											height: 10,
											bgcolor: "background.paper",
											transform: "translateY(-50%) rotate(45deg)",
											zIndex: 0,
										},
									},
								}}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}
							>
								<MenuItem onClick={handleClose}>
									<Button
										variant="contained"
										fullWidth
										startIcon={<ImLab />}
										component={Link}
										to={"/room"}
									>
										Lab rooms
									</Button>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<ListItemIcon
										sx={{
											color: "secondary.main",
										}}
									>
										<FiGithub />
									</ListItemIcon>
									<Typography noWrap>Github</Typography>
									<TbExternalLink style={{ marginLeft: "0.4rem" }} />
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<ListItemIcon
										sx={{
											color: "error.main",
										}}
									>
										<FaNpm />
									</ListItemIcon>
									<Typography noWrap>Npm</Typography>

									<TbExternalLink style={{ marginLeft: "0.4rem" }} />
								</MenuItem>
							</Menu>
						</Hidden>
					</Container>
				</Toolbar>
			</AppBar>
			<Box
				sx={{
					mt: { xs: "60px", sm: "70px" },
				}}
			/>
		</>
	);
};

export default WebsiteHeader;
