import React, {useState} from 'react';
import Header from "../../Components/Header";
import styles from './cowberryStyles.module.css'

import TopLeftArrow from "../../../public/icons/arrow-top-left.svg";
import BottomLeftArrow from "../../../public/icons/arrow-bottom-right.svg";


import ReactJSIcon from '../../../public/icons/reactJs.svg'
import CPlus from "../../../public/icons/cPlus.svg";
import PosterSQL from "../../../public/icons/postgreSQL.svg";
import Python from "../../../public/icons/python.svg";
import NestJs from "../../../public/icons/nestJs.svg";
import JavaSpring from "../../../public/icons/javaSpring.svg";
import PostGis from "../../../public/icons/postGis.svg";
import MongoDb from "../../../public/icons/MongoSvg.svg";


const CowberryDetail = () => {
    const [isVisibleHeader, setIsVisibleHeader] = useState(true);

    const stack = [
        {name: 'PostgreSQL', logoPath: PosterSQL},
        {name: 'Python', logoPath: Python},
        {name: 'NestJS', logoPath: NestJs},
        {name: 'Java Spring', logoPath: JavaSpring},
        {name: 'PostGIS', logoPath: PostGis},
        {name: 'mongoDB', logoPath: MongoDb},
    ]
    const stack2 = [
        {name: 'React JS', logoPath: ReactJSIcon},
    ]


    return (
        <div>
            <div
                style={{
                    transition: 'opacity 0.3s ease-in-out',
                    opacity: isVisibleHeader ? 1 : 0,
                    zIndex: '10',
                    background: 'white',
                    top: '0',
                    width: '100vw',
                    position: 'fixed',
                }}
            >
                <Header/>
            </div>
            <div className={styles.container}>
                <div className={styles.paddingContainer}>
                    <div className={styles.titleContainer}>
                        <div>
                            <p className={styles.title}>Брусника</p>
                        </div>

                        <div className={styles.descriptionsContainer}>
                            <div style={{marginRight: 'clamp(2.5rem, 1.757rem + 2.7vw, 5rem)'}}>
                                <p className={styles.descriptionTitle}>
                                    Услуга
                                </p>
                                <p className={styles.description}>
                                    Аутстаффинг
                                </p>
                            </div>
                            <div>
                                <p className={styles.descriptionTitle}>
                                    Год
                                </p>
                                <p className={styles.description}>
                                    2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.imgBox}/>

                <div className={styles.paddingContainer}>
                    <div className={styles.projectInfoBox}>
                        <p style={{marginRight: '40px'}} className={styles.descriptionTitle}>
                            о проекте
                        </p>
                        <p className={styles.projectInfoTitle}>
                            Аутстаффинг разработчиков
                        </p>
                    </div>
                </div>

                <div className={styles.stackFlex}>
                    <div className={styles.stackItems}>
                        <p className={styles.backend}>
                            Бэкенд
                        </p>
                        <div className={styles.stackBox}>
                            {stack?.map((el: any) => (
                                <div>
                                    <p className={styles.stackItemTitle}>{el.description}</p>
                                    <div key={el.name} className={styles.logoNameBox}>
                                        {el.logoPath ?
                                            <p>
                                                <el.logoPath/>
                                            </p> : null}
                                        <p className={styles.elemName}>
                                            {el.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                            <div className={styles.stackBox2}>
                                {stack2?.map((el: any) => (
                                    <div>
                                        <p className={styles.frontend}>
                                            Фронтенд
                                        </p>
                                        <div key={el.name} style={{marginTop: '28px'}} className={styles.logoNameBox}>
                                            {el.logoPath ?
                                                <p>
                                                    <el.logoPath/>
                                                </p> : null}
                                            <p className={styles.elemName}>
                                                {el.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <BottomLeftArrow className={styles.bottomArrow}/>
                            <TopLeftArrow className={styles.topArrow}/>
                    </div>
                </div>
            </div>
            <div className={styles.container}/>
        </div>
    );
};

export default CowberryDetail;
