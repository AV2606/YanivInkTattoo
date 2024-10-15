import React from "react";
import WhatsappIcon from "@/assets/icons/whatsapp.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { openWhatsapp } from "./functions";

type Props = {};

const WhatsappShare = (props: Props) => {
	const { t, i18n } = useTranslation("common");
	return (
		<div style={{ position: "fixed", bottom: "15px", left: "15px", zIndex: 2 }}>
			<Image
				src={WhatsappIcon}
				alt="Whatsapp Icon"
				width={50}
				height={50}
				style={{
					cursor: "pointer",
					animation: "heartbeat 6s ease-in-out 0s infinite both",
					WebkitAnimation: "heartbeat 6s ease-in-out 0s infinite both",
				}}
				onClick={() => {
					openWhatsapp(t, false);
				}}
			/>
		</div>
	);
};

export default WhatsappShare;
