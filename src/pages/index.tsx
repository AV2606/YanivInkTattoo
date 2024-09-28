import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
	const { t } = useTranslation("common");
	return <>{t("hi")}</>;
}

export async function getServerSideProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "he", ["common"])),
		},
	};
}
