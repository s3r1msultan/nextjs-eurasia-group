import "@/app/styles/global.scss";
import type { AppProps } from "next/app";
import RootLayout from "./Layout";
import { ToastContainer } from "react-toastify";
import { LoadingContext, useLoading } from "@/app/contexts/LoadingContext";

export default function App({ Component, pageProps }: AppProps) {
  const { isLoading, setIsLoading } = useLoading();

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <RootLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </RootLayout>
    </LoadingContext.Provider>
  );
}
