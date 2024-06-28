import "@/app/styles/global.scss";
import type { AppProps } from "next/app";
import RootLayout from "./Layout";
import { LoadingContext, useLoading } from "@/app/components/Loader/Loader";

export default function App({ Component, pageProps }: AppProps) {
	const { isLoading, setIsLoading } = useLoading();

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</LoadingContext.Provider>
	);
}
