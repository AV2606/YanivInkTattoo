import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "./index.module.scss";
import WhatsappShare from "@/components/Whatsapp/WhatsappShare";

export default function Home() {
	const { t } = useTranslation("common");
	return (
		<>
			<div className={classes.title}>{t("common:shortText")}</div>
			<WhatsappShare />
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
