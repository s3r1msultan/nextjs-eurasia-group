import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { Inter } from "next/font/google";
import React from "react";
export const inter = Inter({ subsets: ["latin", "cyrillic"] });

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={`${inter.className}`}>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
