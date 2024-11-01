import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "./index.module.scss";
import WhatsappShare from "@/components/Whatsapp/WhatsappShare";
import Carousel from "react-material-ui-carousel";
import Showroom from "@/components/Showroom/Showroom";
import Invite from "@/components/Invite/Invite";

export default function Home() {
	const { t } = useTranslation("common");
	return (
		<>
			<div className={classes.title}>{t("common:shortText")}</div>
			<Showroom />
			<Invite />
		</>
	);
}

export async function getServerSideProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "he", ["common"])),
		},
	};
}
