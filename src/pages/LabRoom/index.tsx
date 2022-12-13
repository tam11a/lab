import { getRoomById } from "@data/rooms";
import {
	Button,
	Chip,
	// Grid,
	Stack,
	Typography,
} from "@mui/material";
import { Card } from "@pages/Room/RoomCard/types";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
import { AccessMargin, useAccessContext } from "@tam11a/react-use-access";

const LabRoom = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<Card | undefined>(undefined);
	let { roomId } = useParams();
	// var { id, title, caption, description, version }: Card;
	// if(!data) {

	// }
	useEffect(() => {
		let getdata = getRoomById(roomId);
		if (!getdata) navigate("/404");
		let { id, title, caption, description, version }: Card = getdata;
		setData({ id, title, caption, description, version });
	}, []);

	return (
		<>
			<Stack
				direction={"column"}
				sx={{ my: 1 }}
			>
				<Button
					// variant="outlined"
					sx={{ width: "fit-content", my: 2 }}
					size={"small"}
					startIcon={<IoCaretBackSharp />}
					onClick={() => navigate(-1)}
				>
					Back
				</Button>
				<Typography variant="h5">{data?.title}</Typography>
				<Typography
					variant="caption"
					sx={{ color: "secondary.dark" }}
				>
					{data?.caption}
				</Typography>
				{data?.version && (
					<Chip
						label={data?.version}
						color={
							data?.version === "in lab"
								? "primary"
								: data?.version === "decrepted"
								? "error"
								: data?.version === "boilerplate"
								? "secondary"
								: "success"
						}
						size={"small"}
						sx={{
							width: "fit-content",
							my: 1,
						}}
						variant={"outlined"}
					/>
				)}
			</Stack>
			{/* <Grid
				container
				sx={{
					flexDirection: { xs: "column-reverse", md: "row" },
				}}
			>
				<Grid
					item
					sx={{ flex: 1 }}
				>
					wrold
				</Grid>
				<Grid
					item
					xs={12}
					md={2}
				></Grid>
			</Grid> */}
			<CheckComponent />
		</>
	);
};

const CheckComponent = () => {
	const { addPermissions } = useAccessContext();
	return (
		<>
			<Button
				variant="contained"
				onClick={() => addPermissions("showHello1")}
			>
				Add Now
			</Button>
			<AccessMargin
				to={"showHello1"}
				defaultFallback
			>
				hello world
			</AccessMargin>
		</>
	);
};

export default LabRoom;
