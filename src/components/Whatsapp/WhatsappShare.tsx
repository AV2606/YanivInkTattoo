import React from "react";
import WhatsappIcon from "@/assets/icons/whatsapp.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

type Props = {};

const WhatsappShare = (props: Props) => {
	const { t, i18n } = useTranslation();
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
					i18n.language === "en"
						? window.open("https://wa.me/?text=Hi%20I'd%20like%20to%20here%20more", "_blank")
						: window.open("https://wa.me/?text=היי%20אני%20מעוניין%20לשמוע%20עוד", "_blank");
				}}
			/>
		</div>
	);
};

export default WhatsappShare;
