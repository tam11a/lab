import { Button, Chip, Stack } from "@mui/material";
import { Card } from "./types";

const RoomCard = ({ id, title, caption, description, version }: Card) => {
	// console.log(id, title, caption, description, version);
	return (
		<>
			<Button
				variant="outlined"
				color={"primary"}
				fullWidth
				sx={{
					justifyContent: "flex-start",
				}}
			>
				<Stack direction={"column"}>
					{version && (
						<Chip
							label={version}
							color={
								version === "in lab"
									? "primary"
									: version === "decrepted"
									? "error"
									: "success"
							}
							size={"small"}
						/>
					)}
				</Stack>
			</Button>
		</>
	);
};

export default RoomCard;
