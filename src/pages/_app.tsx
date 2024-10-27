import "@/styles/root.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/Layout/Layout";
import { Button } from "@mui/material";
import { useState } from "react";
import { isNewUser } from "@/utils/userFunctions";

function App({ Component, pageProps }: AppProps) {
	const [render, setRender] = useState(false);
	const isNew = isNewUser();
	console.log("isNew", isNew);
	return (
		<Layout>
			{/* <Button onClick={() => setRender((prev) => !prev)}>Render, {isNew ? "is new" : "is not"}</Button> */}
			<Component {...pageProps} />
		</Layout>
	);
}

export default appWithTranslation(App);
