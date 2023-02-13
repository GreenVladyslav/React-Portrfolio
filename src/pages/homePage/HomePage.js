import { Helmet } from 'react-helmet';

import Header from '../../components/header/Header';

import { motion } from 'framer-motion';

import './style.css';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="Vladyslav Ivashchenko | portfolio | resume"
                    content="Frontend Developer resume, skills"/>
                <title>Vladyslav Ivashchenko</title>
            </Helmet>

            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0, transition: {duration: 0.2}}}
            >
                <Header/>

                <main className="section">
                    <div className="container">

                            <ul className="content-list">
                                <li className="content-list__item">
                                    <h2 className="title-2">Frontend</h2>
                                    <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                                </li>
                                <li className="content-list__item">
                                    <h2 className="title-2">Backend</h2>
                                    <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                                </li>
                            </ul>

                    </div>
                </main>
            </motion.div>
        </>
    )
}

export default HomePage;