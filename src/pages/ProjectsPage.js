import Project from "../components/project/project";
import { v4 as uuidv4 } from 'uuid';

import {projects} from '../helpers/projectsList'; 

const ProjectsPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map(item => {

                        const {...itemProps} = item;

                        return (
                            <Project 
                            key={uuidv4()} 
                            {...itemProps}/>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}

export default ProjectsPage;