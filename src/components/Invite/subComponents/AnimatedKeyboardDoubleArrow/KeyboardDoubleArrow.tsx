import React, { useEffect } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { SvgIconProps } from "@mui/material";

type Props = SvgIconProps & {};

const AnimatedKeyboardDoubleArrow = (props: Props) => {
	const [animation, setAnimation] = React.useState("bounce-right 1s both");

	useEffect(() => {
		const setAnim = () => {
			setTimeout(() => {
				setAnimation("bounce-right 1s both");
				endAnim();
			}, 5000);
		};

		const endAnim = () => {
			setTimeout(() => {
				setAnimation("none");
				setAnim();
			}, 1000);
		};

		setAnim();
	}, []);

	console.log("animation", animation);

	return (
		<KeyboardDoubleArrowLeftIcon
			{...props}
			style={{
				animation: animation,
				...props.style,
			}}
		/>
	);
};

export default AnimatedKeyboardDoubleArrow;
