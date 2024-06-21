import "@/app/styles/global.scss";
import type { AppProps } from "next/app";
import RootLayout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	);
}
