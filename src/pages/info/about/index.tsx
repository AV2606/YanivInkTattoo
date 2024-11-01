import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

type Props = {};

const Index = (props: Props) => {
	return <div>about</div>;
};

export async function getServerSideProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "he", ["common"])),
		},
	};
}

export default Index;
