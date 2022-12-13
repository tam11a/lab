import { Avatar, Button, Stack, Typography } from "@mui/material";
import { ImLab } from "react-icons/im";
import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Stack
			direction={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			minHeight={"80vh"}
			rowGap={2}
		>
			<Avatar
				src={"/favicon.png"}
				variant={"square"}
				sx={{
					height: "85px",
					width: "fit-content",
				}}
			/>
			<Typography
				variant={"h5"}
				sx={{
					pl: "20px",
					"& svg": { color: "primary.main" },
				}}
			>
				Tam's Lab{" "}
				<ImLab
					style={{
						marginLeft: "10px",
						transform: "rotateZ(25deg)",
					}}
				/>
			</Typography>
			<Typography
				variant={"subtitle2"}
				sx={{
					maxWidth: "370px",
					textAlign: "center",
					"& b, & a": {
						color: "primary.main",
						textDecoration: "none",
						fontWeight: "bold",
					},
				}}
			>
				As a <b>Full-Stack Developer</b> I love to experiment on various{" "}
				<b>frontend</b>, <b>backend</b> or other <b>development</b> tools. Some{" "}
				<b>wasted</b> experiments caused this <b>Web Laboratory</b>.
			</Typography>
			<Button
				variant="contained"
				startIcon={<TbHandClick />}
				component={Link}
				to={"/room"}
			>
				Get Started!!
			</Button>
		</Stack>
	);
};

export default Home;
