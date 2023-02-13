import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import useMockService from "../../services/useMockService";

import { motion } from "framer-motion";

// import {projects} from '../helpers/projectsList'; 
import './style.css';

const ProjectsPage = () => {

    const [projectList, setProjectList] = useState([]);

    const {loading, error, getAllProjects} = useMockService();

    useEffect(() => {
        getAllProjects()
            .then(data => setProjectList(data))
            // .catch(error => console.log('Данные не получены'));
    }, [])

    const renderItems = (arr) => {
        const elements = arr.map(item => {

            const {id, title, img} = item;

            return (
                <CSSTransition key={id} timeout={500} classNames="project">
                    <li className="project" key={id} tabIndex={0}>
                        <Link  to={`/project/${id}`} >
                            <img src={img} alt={title} className="project__img"/>
                            <h3 className="project__title">{title}</h3>
                        </Link>
                    </li>
                </CSSTransition>
            )
        })

        return (
            <TransitionGroup component={'ul'} className="projects">
                {elements}
            </TransitionGroup>
                /*<ul className="projects"> </ul> */
        )
    }


    const elements = renderItems(projectList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;

    return (
        <>
            <Helmet>
                <meta
                    name="Vladyslav Ivashchenko projects"
                    content="Frontend Developer projects"/>
                <title>Projects</title>
            </Helmet>

            <motion.main 
            className="section"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.2}}}
        >
            <div className="container">
                <h2 className="title-1">Projects</h2>
                    {errorMessage}
                    {spinner}
                    {elements}
            </div>
        </motion.main>
        </>

    )
}

export default ProjectsPage;










    // const projectElements = projects.map((project, index) => {
    //     return (
    //         <Project
    //             key={index}
    //             title={project.title}
    //             img={project.img}
    //             index={index}
    //         />
    //     );
    // })