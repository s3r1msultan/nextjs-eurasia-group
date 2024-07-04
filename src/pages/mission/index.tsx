import React from "react";
import IntroSection from "./IntroSection";
import ValuesSection from "./ValuesSection";

const OurMissionPage = () => {
	return (
		<>
			<IntroSection />
			<ValuesSection />
		</>
	);
};

export async function getStaticProps(context: { locale: any }) {
	return {
		props: {
			messages: (await import(`/public/locales/${context.locale}.json`))
				.default,
		},
	};
}
export default OurMissionPage;
