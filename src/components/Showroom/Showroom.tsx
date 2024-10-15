import React, { useLayoutEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { getShowroomPhotos } from "./functions";
import Image from "next/image";

type Props = {};

const Showroom = (props: Props) => {
	const carouselItems = getShowroomPhotos();
	const [width, setWidth] = React.useState(carouselItems[0].image.width / (carouselItems[0].image.height / 500) + 20);

	return (
		<div
			aria-label="job examples"
			style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
		>
			<Carousel
				sx={{
					width: width,
					//boxShadow: "inset 0px 0px 3px 0px rgba(255,255,255,1)",
					borderRadius: "5px",
				}}
				next={(now) => {
					console.log(
						"next",
						now,
						carouselItems[now].image.width,
						carouselItems[now].image.height,
						"div by 500: ",
						carouselItems[now].image.width / (carouselItems[now].image.height / 500)
					);
					setWidth(carouselItems[now].image.width / (carouselItems[now].image.height / 500) + 20);
				}}
			>
				{carouselItems.map((item, i) => (
					<div
						key={i}
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: "10px",
						}}
					>
						<Image
							src={item.image}
							alt={item.title}
							height={500}
							style={{
								boxShadow: "0px 0px 20px -15px rgba(255,255,255,0.94)",
							}}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Showroom;
