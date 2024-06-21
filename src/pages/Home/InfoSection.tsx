import React from "react";
import styles from "./Home.module.scss";

const InfoSection = () => {
	return (
		<section className={styles.info_section}>
			<h2 className={styles.info_title}>
				Мы в <span>цифрах</span>
			</h2>
			<div className={styles.info_content}>
				<ul className={styles.info_list}>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>24</h3>
						<p className={styles.infro_item_subtitle}>.года на рынке</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>10</h3>
						<p className={styles.infro_item_subtitle}>
							.лет на рынке ирригации
						</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>20</h3>
						<p className={styles.infro_item_subtitle}>
							.лет как национальный дилер John Deere
						</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>14</h3>
						<p className={styles.infro_item_subtitle}>
							.складов запчастей на сумму более $16 млн
						</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>250</h3>
						<p className={styles.infro_item_subtitle}>.служебных автомобилей</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>35%</h3>
						<p className={styles.infro_item_subtitle}>
							.доля рынка в Premium сегменте
						</p>
					</li>
				</ul>
				<ul className={styles.info_list}>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>{">"}24</h3>
						<p className={styles.infro_item_subtitle}>. единиц техники</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>{">"}200</h3>
						<p className={styles.infro_item_subtitle}>
							.человек работают в Aftersales
						</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>470</h3>
						<p className={styles.infro_item_subtitle}>
							.сотрудников во всех регионах
						</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>14</h3>
						<p className={styles.infro_item_subtitle}>
							. представительств в Казахстане и 1 в Кыргызстане
						</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>$65</h3>
						<p className={styles.infro_item_subtitle}>
							.млн прямые инвестиции в Казахстан
						</p>
					</li>
					<li className={styles.info_list_item}>
						<h3 className={styles.info_list_item_title}>35%</h3>
						<p className={styles.infro_item_subtitle}>
							.доля рынка в Premium сегменте
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default InfoSection;
