import "@/styles/root.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/Layout/Layout";
import { Button } from "@mui/material";
import { useMemo, useState } from "react";
import { isNewUser } from "@/utils/userFunctions";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function App({ Component, pageProps }: AppProps) {
	const client = useMemo(() => new QueryClient(), []);

	return (
		<QueryClientProvider client={client}>
			<Layout>
				{/* <Button onClick={() => setRender((prev) => !prev)}>Render, {isNew ? "is new" : "is not"}</Button> */}
				<Component {...pageProps} />
			</Layout>
		</QueryClientProvider>
	);
}

export default appWithTranslation(App);
