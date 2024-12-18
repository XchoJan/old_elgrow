import React, {useState} from 'react';
import styles from './MainServices.module.css'

import NestJSIcon from '../../../public/icons/nestJs.svg'
import NodeJsIcon from '../../../public/icons/nodeJs.svg'
import PostgreSQLIcon from '../../../public/icons/postgreSQL.svg'
import ReactJSIcon from '../../../public/icons/reactJs.svg'
import MongoDBIcon from '../../../public/icons/MongoSvg.svg'
import VueJSIcon from '../../../public/icons/vueJs.svg'
import MariaDbIcon from '../../../public/icons/mariaDb.svg'
import CPlus from '../../../public/icons/cPlus.svg'
import PythonIcon from '../../../public/icons/python.svg'
import JavaSpringIcon from '../../../public/icons/javaSpring.svg'
import PostGisIcon from '../../../public/icons/postGis.svg'
import KotlinIcon from '../../../public/icons/kotlin.svg'
import EPayIcon from '../../../public/icons/epay.svg'
import CIcon from '../../../public/icons/1c.svg'
import BitrixIcon from '../../../public/icons/bitrix.svg'
import AmoCrm from '../../../public/icons/amo.svg'
import OraclieIcon from '../../../public/icons/oracle.svg'


const MainServices = () => {

    const filters = [
        {
            name: 'Digital',
            description:
                'Комплексная интеграция \n информационных систем \n на основе веб и мобильных \n технологий',
            stack: [
                { name: 'NodeJs', logoPath: NodeJsIcon },
                { name: 'PostgreSQL', logoPath: PostgreSQLIcon },
                { name: 'mongoDB', logoPath: MongoDBIcon },
                { name: 'ReactJS', logoPath: ReactJSIcon },
                { name: 'NestJS', logoPath: NestJSIcon },
                { name: 'VueJS', logoPath: VueJSIcon },
            ],
            price: '280 000 ₽'
        },

        {
            name: 'Intranet',
            description: 'Корпоративные порталы \n и внутренние системы \n предприятий',
            stack: [
                { name: 'MariaDB', logoPath: MariaDbIcon },
                { name: 'C# .NET', logoPath:  CPlus },
                { name: 'Python', logoPath: PythonIcon },
                { name: 'Java Spring', logoPath: JavaSpringIcon },
                { name: 'PostGIS', logoPath: PostGisIcon },
                { name: 'PostgreSQL', logoPath: PostgreSQLIcon },
                { name: 'mongoDB', logoPath: MongoDBIcon },
            ],
            price: '240 000 ₽'
        },
        {
            name: 'Mobile',
            description:
                'Разработка нативных \n и кросс-платформенных \n мобильных приложений',
            stack: [
                { name: 'React Native', logoPath: ReactJSIcon },
                { name: 'Kotlin', logoPath: KotlinIcon },

            ],
            price: '300 000 ₽'
        },
        {
            name: 'SLA',
            description: 'Техническая поддержка \n ваших проектов 24/7',
            price: '240 000 ₽'
        },

        {
            name: 'E-commerce',
            description: 'Разработка крупных \n интернет-магазинов',
            stack: [
                { name: 'СБЕР Pay', logoPath:  EPayIcon },
                { name: '1C', logoPath:  CIcon },
                { id: 'onlyIcon', logoPath: BitrixIcon },
                { id: 'onlyIcon', logoPath: AmoCrm },
                { id: 'onlyIcon', logoPath: OraclieIcon },
                { name: 'Другое' },
            ],
            price: '220 000 ₽'
        },
        {
            name: 'Аутстаффинг',
            description: 'Только штатные сотрудники \n уровня middle +',
            stack: [
                { name: 'MariaDB', logoPath: MariaDbIcon },
                { name: 'Python', logoPath: PythonIcon },
                { name: 'Java Spring', logoPath: JavaSpringIcon },
                { name: 'PostGIS', logoPath: PostGisIcon },
                { name: 'PostgreSQL', logoPath: PostgreSQLIcon },
                { name: 'mongoDB', logoPath: MongoDBIcon },
                { name: 'React Native', logoPath: ReactJSIcon },
                { name: 'Kotlin', logoPath: KotlinIcon },
                { name: 'C# .NET', logoPath:  CPlus },
                { name: 'NodeJs', logoPath: NodeJsIcon },
                { name: 'NestJS', logoPath: NestJSIcon },
                { name: 'VueJS', logoPath: VueJSIcon },
                { name: 'ReactJS', logoPath: ReactJSIcon },

            ],
            price: '180 000 ₽'
        },
    ];

    const [activeFilter, setActiveFilter] = useState<any>({
        name: 'Digital',
        description:
            'Комплексная интеграция \n информационных систем \n на основе веб и мобильных \n технологий',
        stack: [
            { name: 'NodeJs', logoPath: NodeJsIcon },
            { name: 'PostgreSQL', logoPath: PostgreSQLIcon },
            { name: 'mongoDB', logoPath: MongoDBIcon },
            { name: 'ReactJS', logoPath: ReactJSIcon },
            { name: 'NestJS', logoPath: NestJSIcon },
            { name: 'VueJS', logoPath: VueJSIcon },
        ],
        price: '280 000 ₽ '
    });


    return (
        <div className={styles.servicesBox}>
            <div className={styles.servicesElements}>
                <div className={styles.filtersBox}>
                    {filters.map((el) => (
                        <div className={styles.nameBox} onClick={()=> setActiveFilter(el)}>
                            <p className={styles.filters}>
                                {el.name}
                            </p>
                            {activeFilter.name === el.name ? <div className={styles.activeElementIcon}/> : null}
                        </div>
                    ))}
                </div>

                <div className={styles.descriptionBox}>
                    <p className={styles.description}>
                        {activeFilter.description}
                    </p>

                    <div className={styles.descriptionIconsBox}>
                        {activeFilter?.stack?.map((el: any) => (
                            <div key={el.name} className={styles.logoNameBox}>
                                {el.logoPath ? <p>
                                    <el.logoPath/>
                                </p> : null}
                                <p style={{color: '#fff', marginLeft: '12px'}}>
                                    {el.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.priceBox}>
                    <div>
                        <span style={{color: '#fff', fontSize: '16px'}}>
                            от {" "}
                        </span>
                        <span className={styles.price}>
                            {activeFilter.price}
                        </span>
                        <p style={{color: '#fff', position: 'absolute', right: 0}}>
                            за спринт
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainServices;
