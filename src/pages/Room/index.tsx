import { Masonry } from "@mui/lab";
import {
	// Button,
	// Grid,
	Stack,
	Typography,
} from "@mui/material";
import { Fragment } from "react";
import roomList from "@data/rooms";
import RoomCard from "./RoomCard";
// import { useGetAllProduct } from "@queries/allProducts";
// import { useQueryClient } from "@tanstack/react-query";

const Room = () => {
	// const getProducts = async () => {
	// 	console.log(await getAllProduct());
	// };
	// useEffect(() => {
	// 	getProducts();
	// }, []);

	// const queryClient = useQueryClient();

	// const { data, isLoading, error, isError } = useGetAllProduct();

	// console.log(isLoading, data, isError, error);

	return (
		<Stack
			direction={"column"}
			alignItems={"center"}
			sx={{
				py: 1,
			}}
		>
			<Typography
				variant="h5"
				textAlign={"center"}
			>
				Lab lobby
			</Typography>
			<Typography
				variant="caption"
				textAlign={"center"}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vel?
			</Typography>
			<Typography
				variant="body2"
				textAlign={"center"}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt in
				impedit blanditiis cupiditate omnis pariatur.
			</Typography>

			<Masonry
				columns={{ xs: 1, sm: 2 }}
				spacing={1}
				sx={{
					mt: 2,
				}}
			>
				{roomList?.map?.((data) => (
					<Fragment key={data.id}>
						<RoomCard {...data} />
					</Fragment>
				))}
			</Masonry>
		</Stack>
	);
};

export default Room;
