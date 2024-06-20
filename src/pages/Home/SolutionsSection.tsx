import React from "react";
import styles from "./HomeStyle.module.scss";
import Wrapper from "@/app/components/Wrapper/Wrapper";

const SolutionsSections = () => {
	return (
		<section className={styles.solutions}>
			<Wrapper>
				<div className={styles.solutions_content}>
					<h2 className={styles.solutions_title}>Уникальные решения</h2>
					<p className={styles.solutions_subtitle}>
						За эти годы мы создали развитую сеть по обеспечению
						<br /> фермеров уникальными комплексными решениями
						<br /> в сельском хозяйстве Казахстана и Кыргызстана
					</p>
					<div className={styles.solutions_grid}>
						<div className={styles.solutions_grid_item}>
							<h3 className={styles.solutions_grid_item_title}>3,6</h3>
							<p className={styles.solutions_grid_item_subtitle}>
								. млн га засеваются решениями
								<br />
								для посева John Deere
							</p>
						</div>
						<div className={styles.solutions_grid_item}>
							<h3 className={styles.solutions_grid_item_title}>6.5</h3>
							<p className={styles.solutions_grid_item_subtitle}>
								. млн га убираются решениями
								<br />
								для уборки John Deere
							</p>
						</div>
						<div className={styles.solutions_grid_item}>
							<h3 className={styles.solutions_grid_item_title}>2,5</h3>
							<p className={styles.solutions_grid_item_subtitle}>
								. млн га оцифровано
								<br />
								решениями John Deere
							</p>
						</div>
						<div className={styles.solutions_grid_item}>
							<h3 className={styles.solutions_grid_item_title}>16,3</h3>
							<p className={styles.solutions_grid_item_subtitle}>
								. тысячи га орошается
								<br />
								решениями для полива
							</p>
						</div>
						<div className={styles.solutions_grid_item}>
							<h3 className={styles.solutions_grid_item_title}>{">"}2K</h3>
							<p className={styles.solutions_grid_item_subtitle}>
								. фермеров зарабытывают
								<br />с нашими решениями
							</p>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

export default SolutionsSections;
