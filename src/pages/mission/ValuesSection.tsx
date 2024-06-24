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
      <ul className="two_columns">
        <li className="two_columns_row">
          <div className="two_columns_row_column">
            <StarsIcon />
            <h3 className="two_columns_row_column_title">Голод к успеху</h3>
            <p className="two_columns_row_column_subtitle">
              Мы всегда амбициозны, страстны и энергичны в наших мечтах и достижениях
            </p>
          </div>
          <div className="two_columns_row_column">
            <HeartIcon />
            <h3 className="two_columns_row_column_title">Любовь</h3>
            <p className="two_columns_row_column_subtitle">
              Любовь - это фундамент, на котором мы строим наш бизнес, отношения в команде, с клиентами и партнёрами
            </p>
          </div>
        </li>
        <li className="two_columns_row">
          <div className="two_columns_row_column">
            <PeopleHeartIcon />
            <h3 className="two_columns_row_column_title">Команда</h3>
            <p className="two_columns_row_column_subtitle">
              Мы высокомотивированные на успех профессионалы, эксперты и консультанты, всегда готовы прийти на помощь и
              оказать поддержку
            </p>
          </div>
          <div className="two_columns_row_column">
            <GraphIcon />
            <h3 className="two_columns_row_column_title">Инновации</h3>
            <p className="two_columns_row_column_subtitle">
              Инноавции - неотъемлемая часть нашей жизни, а безграничность в росте и развитии всего, что нас окружает,
              делает нас уникальными
            </p>
          </div>
        </li>
        <li className="two_columns_row">
          <div className="two_columns_row_column">
            <BulbIcon />
            <h3 className="two_columns_row_column_title">Осознанность</h3>
            <p className="two_columns_row_column_subtitle">
              Мы четко знаем, чего мы хотим в жизни, зачем пришли в нашу компанию и что необходимо для наших любимых
              клиентов и партнеров
            </p>
          </div>
          <div className="two_columns_row_column">
            <FlowerIcon />
            <h3 className="two_columns_row_column_title">Благосостояние</h3>
            <p className="two_columns_row_column_subtitle">
              Мы постоянно работаем над тем, чтобы увеличить прибыль наших клиентов партнеров, сотрудников и акционеров.
              Партнерство с нами - это взаимовыгодное сотрудничество, которое приводит к росту благосостояния всех
              сторон
            </p>
          </div>
        </li>
        <li className="two_columns_row">
          <div className="two_columns_row_column">
            <LayersIcon />
            <h3 className="two_columns_row_column_title">Синергия</h3>
            <p className="two_columns_row_column_subtitle">
              Наши жизненные цели и ценности совпадают с целями и ценностями нашей компании
            </p>
          </div>
          <div className="two_columns_row_column"></div>
        </li>
      </ul>
    </section>
  );
};

export default ValuesSection;
