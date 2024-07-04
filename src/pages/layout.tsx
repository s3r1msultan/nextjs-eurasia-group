import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
const inter = Inter({ subsets: ["latin", "cyrillic"] });

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const isContactUs = router.pathname === "/contact_us";
	console.log(isContactUs);
	return (
		<>
			<Header is_contact_us={isContactUs} />
			<main className={`${inter.className} main`}>{children}</main>
			<Footer is_contact_us={isContactUs} />
		</>
	);
};
export default Layout;
