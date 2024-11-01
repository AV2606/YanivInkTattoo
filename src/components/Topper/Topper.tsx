import React from "react";
import classes from "./Topper.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import IsraelFlag from "../../assets/icons/israelFlag.png";
import YanivInkTattooLogo from "../../assets/logos/yaniv-inktattoo-high-resolution-logo-transparent.png";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { CssVars } from "@/theme/vanilla/CssVars";
import { TopperHeight } from "@/utils/constants";

type Props = {
	onMenuOpen: () => void;
};

const Topper = (props: Props) => {
	const [language, setLanguage] = React.useState("he");
	const [openMenu, setOpenMenu] = React.useState(false);

	const onLanguageChange = () => {
		console.log("Language changed from: ", language);
	};

	const onMenuOpen = () => {
		props.onMenuOpen();
	};

	return (
		<div
			className={classes.background}
			style={{ height: TopperHeight }}
		>
			<IconButton onClick={onMenuOpen}>
				<MenuIcon style={{ color: CssVars.secondaryColor }} />
			</IconButton>
			<Image
				src={YanivInkTattooLogo}
				width={200}
				height={30}
				alt="Yaniv Ink Tattoo Logo"
			/>
			<span>
				<IconButton onClick={onLanguageChange}>
					<Image
						src={IsraelFlag}
						width={30}
						height={30}
						alt="language icon - hebrew"
					/>
				</IconButton>
				&nbsp; &nbsp;
			</span>
		</div>
	);
};

export default Topper;
