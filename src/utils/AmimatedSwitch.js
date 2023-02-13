import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy } from 'react';

import { AnimatePresence } from 'framer-motion';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const ProjectsPage = lazy(() => import('../pages/projectsPage/ProjectsPage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/ContactsPage'));
const SingleProjectPage = lazy(() => import('../pages/singleProjectPage/SingleProjectPage'));
const Page404 = lazy(() => import('../pages/404'));



const AnimatedSwith = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/project" element={<ProjectsPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/project/:id" element={<SingleProjectPage/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedSwith;