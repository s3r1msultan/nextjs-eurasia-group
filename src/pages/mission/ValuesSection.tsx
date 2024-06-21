import React from "react";
import styles from "./Mission.module.scss";
import StarsIcon from "@/app/icons/StarsIcon";
import HeartIcon from "@/app/icons/HeartIcon";
import PeopleHeartIcon from "@/app/icons/PeopleHeartIcon";
import BulbIcon from "@/app/icons/BulbIcon";
import LayersIcon from "@/app/icons/LayersIcon";
import GraphIcon from "@/app/icons/GraphIcon";
import FlowerIcon from "@/app/icons/FlowerIcon";

const ValuesSection = () => {
	return (
		<section className={styles.values_section}>
			<div className={styles.values_title_wrapper}>
				<h2 className={styles.values_title}>
					<span>Ценности</span>
				</h2>
				<p>которые помогают выполнять нашу миссию</p>
			</div>
			<div className={styles.values_content}>
				<ul className={styles.values_list}>
					<li className={styles.values_list_item}>
						<StarsIcon />
						<h3 className={styles.values_list_item_title}>Голод к успеху</h3>
						<p className={styles.infro_item_subtitle}>
							Мы всегда амбициозны, страстны и энергичны в наших мечтах и
							достижениях
						</p>
					</li>
					<li className={styles.values_list_item}>
						<PeopleHeartIcon />
						<h3 className={styles.values_list_item_title}>Команда</h3>
						<p className={styles.infro_item_subtitle}>
							Мы высокомотивированные на успех профессионалы, эксперты и
							консультанты, всегда готовы прийти на помощь и оказать поддержку
						</p>
					</li>
					<li className={styles.values_list_item}>
						<BulbIcon />
						<h3 className={styles.values_list_item_title}>Осознанность</h3>
						<p className={styles.infro_item_subtitle}>
							Мы четко знаем, чего мы хотим в жизни, зачем пришли в нашу
							компанию и что необходимо для наших любимых клиентов и партнеров
						</p>
					</li>
					<li className={styles.values_list_item}>
						<LayersIcon />
						<h3 className={styles.values_list_item_title}>Синергия</h3>
						<p className={styles.infro_item_subtitle}>
							Наши жизненные цели и ценности совпадают с целями и ценностями
							нашей компании
						</p>
					</li>
				</ul>
				<ul className={styles.values_list}>
					<li className={styles.values_list_item}>
						<HeartIcon />
						<h3 className={styles.values_list_item_title}>Любовь</h3>
						<p className={styles.infro_item_subtitle}>
							Любовь - это фундамент, на котором мы строим наш бизнес, отношения
							в команде, с клиентами и партнёрами
						</p>
					</li>
					<li className={styles.values_list_item}>
						<GraphIcon />
						<h3 className={styles.values_list_item_title}>{">"}Инновации</h3>
						<p className={styles.infro_item_subtitle}>
							Инноавции - неотъемлемая часть нашей жизни, а безграничность в
							росте и развитии всего, что нас окружает, делает нас уникальными
						</p>
					</li>
					<li className={styles.values_list_item}>
						<FlowerIcon />
						<h3 className={styles.values_list_item_title}>Благосостояние</h3>
						<p className={styles.infro_item_subtitle}>
							Мы постоянно работаем над тем, чтобы увеличить прибыль наших
							клиентов партнеров, сотрудников и акционеров. Партнерство с нами -
							это взаимовыгодное сотрудничество, которое приводит к росту
							благосостояния всех сторон
						</p>
					</li>
					<li className={styles.values_list_item}></li>
				</ul>
			</div>
		</section>
	);
};

export default ValuesSection;
