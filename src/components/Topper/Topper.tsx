import React from "react";
import classes from "./Topper.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import IsraelFlag from "../../assets/icons/israelFlag.png";
import YanivInkTattooLogo from "../../assets/logos/yaniv-inktattoo-high-resolution-logo-transparent.png";

type Props = {};

const Topper = (props: Props) => {
	return (
		<div className={classes.background}>
			<MenuIcon />
			<Image
				src={YanivInkTattooLogo}
				width={200}
				height={30}
				alt="Yaniv Ink Tattoo Logo"
			/>
			<span>
				<Image
					src={IsraelFlag}
					width={30}
					height={30}
					alt="language icon - hebrew"
				/>
				&nbsp; &nbsp;
			</span>
		</div>
	);
};

export default Topper;
