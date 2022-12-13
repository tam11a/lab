import { Button, Chip, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "./types";

const RoomCard = ({ id, title, caption, description, version }: Card) => {
	// console.log(id, title, caption, description, version);
	return (
		<>
			<Button
				variant="outlined"
				color={
					version === "in lab"
						? "primary"
						: version === "decrepted"
						? "error"
						: version === "boilerplate"
						? "secondary"
						: !version
						? "inherit"
						: "success"
				}
				fullWidth
				sx={{
					justifyContent: "flex-start",
					p: 1,
				}}
				component={Link}
				to={`/room/${id}`}
			>
				<Stack direction={"column"}>
					<Typography variant="h6">{title}</Typography>
					<Typography
						variant="caption"
						sx={{
							color: "secondary.dark",
						}}
					>
						{caption}
					</Typography>
					{version && (
						<Chip
							label={version}
							color={
								version === "in lab"
									? "primary"
									: version === "decrepted"
									? "error"
									: version === "boilerplate"
									? "secondary"
									: "success"
							}
							size={"small"}
							sx={{
								width: "fit-content",
								my: 1,
							}}
						/>
					)}
					<Typography variant="subtitle2">{description}</Typography>
				</Stack>
			</Button>
		</>
	);
};

export default RoomCard;
