import React from "react";
import styles from "./Home.module.scss";

const DigitsSection = () => {
	return (
		<section className={styles.info_section}>
			<h2 className={styles.info_title + " " + "section_title"}>
				Мы в <span>цифрах</span>
			</h2>
			<ul className="two_columns">
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>24</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							года на рынке
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>{">"}12К</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							единиц техники
						</p>
					</div>
				</li>
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>10</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							лет на рынке ирригации
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>{">"}200</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							человек работают в Aftersales
						</p>
					</div>
				</li>

				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>20</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							лет как национальный дилер John Deere
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>470</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							сотрудников во всех регионах
						</p>
					</div>
				</li>
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>14</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							складов запчастей на сумму более $16 млн
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>14</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							представительств в Казахстане и 1 в Кыргызстане
						</p>
					</div>
				</li>
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>250</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							служебных автомобилей
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>$65</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							млн. прямые инвестиции в Казахстан
						</p>
					</div>
				</li>
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>35%</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							доля рынка в Premium сегменте
						</p>
						<p className={styles.two_columns_row_cell_subtitle}>
							служебных автомобилей
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>35%</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							доля рынка в Premium сегменте
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default DigitsSection;
