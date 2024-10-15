import React from "react";
import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import DirDiv from "../DirDiv/DirDiv";
import { CssVars } from "@/theme/vanilla/CssVars";
import AnimatedKeyboardDoubleArrow from "./subComponents/AnimatedKeyboardDoubleArrow/KeyboardDoubleArrow";
import { openWhatsapp } from "../Whatsapp/functions";

type Props = {};

const Invite = (props: Props) => {
	const { t } = useTranslation("common");
	return (
		<DirDiv
			tag="h3"
			style={{
				display: "flex",
				alignItems: "center",
			}}
		>
			{t("common:invite")}
			&nbsp;
			<AnimatedKeyboardDoubleArrow style={{ color: CssVars.themeColor }} />
			&nbsp;
			<Button
				onClick={() => {
					openWhatsapp(t, true);
				}}
				sx={{
					background: CssVars.button,
					boxShadow: `inset 0px 0px 20px 10px #02002490`,
					color: CssVars.secondaryColor,
					borderRadius: "5px",
					"&:hover": {
						boxShadow: "none",
					},
				}}
			>
				{t("common:sendMessage")}
			</Button>
		</DirDiv>
	);
};

export default Invite;
