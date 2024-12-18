import React, {useState} from 'react';
import Header from "../../Components/Header";
import styles from './vtbStyles.module.css'

import ReactJSIcon from '../../../public/icons/reactJs.svg'
import CPlus from "../../../public/icons/cPlus.svg";
import TopLeftArrow from "../../../public/icons/arrow-top-left.svg";
import BottomLeftArrow from "../../../public/icons/arrow-bottom-right.svg";


const VtbDetail = () => {
    const [isVisibleHeader, setIsVisibleHeader] = useState(true);

    const stack = [
        { name: 'C# .NET', logoPath:  CPlus, description: 'Бэкенд' },
        { name: 'ReactJS', logoPath: ReactJSIcon, description: 'Фронтенд' }
    ]

    return (
        <div >
            <div
                style={{
                    transition: 'opacity 0.3s ease-in-out',
                    opacity: isVisibleHeader ? 1 : 0,
                    zIndex: '10',
                    background: 'white',
                    top: '0',
                    width: '100vw',
                    position: 'fixed',
                    // maxWidth: '1920px'
                }}
            >
                <Header />
            </div>
            <div className={styles.container}>
                <div className={styles.paddingContainer}>
                    <div className={styles.titleContainer}>
                        <div>
                            <p className={styles.title}>ВТБ</p>
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
                                    2021-2023
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

                <div className={styles.stackBox}>

                    {stack?.map((el: any) => (
                        <div>
                            <p className={styles.stackItemTitle}>{el.description}</p>
                            <div key={el.name} className={styles.logoNameBox}>
                                {el.logoPath ? <p>
                                    <el.logoPath/>
                                </p> : null}
                                <p style={{color: '#000', marginLeft: '12px'}}>
                                    {el.name}
                                </p>
                            </div>
                        </div>
                    ))}

                    <BottomLeftArrow className={styles.bottomArrow}/>
                    <TopLeftArrow className={styles.topArrow}/>

                </div>
            </div>
            <div className={styles.container}/>
        </div>
    );
};

export default VtbDetail;
