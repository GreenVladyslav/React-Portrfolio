import Project from "../components/project/Project";
// import { v4 as uuidv4 } from 'uuid';

import {projects} from '../helpers/projectsList'; 

const ProjectsPage = () => {

    // const elements = projects.map(item => ({...item, id: uuidv4()}));

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                img={project.img}
                                index={index}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>
    )
}

export default ProjectsPage;