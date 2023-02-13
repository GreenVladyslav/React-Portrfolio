import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import useMockService from "../../services/useMockService";

import BtnGitHub from "../../components/btnGitHub/btnGitHub";

import { motion } from "framer-motion";

import './style.css';

const SingleProjectPage = () => {

    const {id} = useParams();
    const [project, setProject] = useState([]);

    const {loading, error, getSingleProject, clearError} = useMockService();

    useEffect(() => {
        updateProject();
    }, [id])

    const updateProject = () => {
        clearError();
        getSingleProject(id).then(onProjectLoaded)
    }

    const onProjectLoaded = (project) => {
        setProject(project);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !project) ? <View project={project}/> : null;

    return (
        <motion.main
            className="section"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.2}}}
        >
            <div className="container">
                {errorMessage}
                {spinner}
                {content}
            </div>
        </motion.main>
    )
}

const View = ({project}) => {
    const {title, imgBig, skills, gitHubLink} = project;

    return (
        <>
            <Helmet>
                <meta
                    name={title}
                    content={skills}/>
                <title>{title}</title>
            </Helmet>

            <div className="project-details">
                <h1 className="title-1">{title}</h1>
                <motion.img src={imgBig} alt={title} className="project-details__cover"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0, transition: {duration: 0.3}}}/>
                {/* <img src={imgBig} alt={title} className="project-details__cover" /> */}
                <div className="project-details__desc">
                    <p>Skills: {skills}</p>
                </div>

                <BtnGitHub link={gitHubLink}/>

                <Link to="/project" className="back-to-all">Back to all</Link>
            </div>
        </>
    )
        

}


export default SingleProjectPage;