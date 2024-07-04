import "@/app/styles/global.scss";
import type { AppProps } from "next/app";
import RootLayout from "./layout";
import { ToastContainer } from "react-toastify";
import { LoadingContext, useLoading } from "@/app/contexts/LoadingContext";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const { isLoading, setIsLoading } = useLoading();
	const router = useRouter();

	return (
		<NextIntlClientProvider
			locale={router.locale}
			timeZone="Asia/Almaty"
			messages={pageProps.messages}>
			<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
				<RootLayout>
					<Component {...pageProps} />
					<ToastContainer />
				</RootLayout>
			</LoadingContext.Provider>
		</NextIntlClientProvider>
	);
}
export async function getStaticProps(context: { locale: any }) {
	return {
		props: {
			messages: (await import(`/public/locales/${context.locale}.json`))
				.default,
		},
	};
}
