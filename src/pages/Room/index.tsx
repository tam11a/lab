import { Button, Grid, Stack, Typography } from "@mui/material";
import RoomCard from "./RoomCard";
import { getAllProduct, useGetAllProduct } from "@queries/allProducts";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

const roomList = [
	{
		id: 1,
		title: "React Use Hooks",
		caption: "tam11a/react-use-hooks",
		description:
			"Performant, flexible & extensible hooks with easy-to-use flexibility. react-use-hooks reduces the amount of code you need to write while removing unnecessary re-renders in ReactJS.",
		version: "in lab",
	},
	{
		id: 2,
		title: "React Use Access",
		caption: "tam11a/react-use-access",
		description: "React library to use in ACL(Access List) Feature.",
		version: "in lab",
	},
];

const Room = () => {
	// const getProducts = async () => {
	// 	console.log(await getAllProduct());
	// };
	// useEffect(() => {
	// 	getProducts();
	// }, []);

	const queryClient = useQueryClient();

	const { data, isLoading, error, isError } = useGetAllProduct();

	console.log(isLoading, data, isError, error);

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
				Lorem, ipsum.
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
			<Button
				onClick={() => {
					queryClient.invalidateQueries(["get-products"]);
				}}
			>
				Get Products
			</Button>
			<Grid container>
				{roomList?.map?.((data) => (
					<Grid
						item
						xs={12}
						md={6}
						key={data.id}
					>
						<RoomCard {...data} />
					</Grid>
				))}
			</Grid>
		</Stack>
	);
};

export default Room;
