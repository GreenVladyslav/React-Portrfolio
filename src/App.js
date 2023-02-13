import { Suspense, lazy } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Spinner from './components/spinner/Spinner';
import ScrollToTop from './utils/scrollToTop';
import BtnBackToTop from './components/btnBackToTop/BtnBackToTop';

import AnimatedSwith from './utils/AmimatedSwitch';

import './styles/style.css';

const Navbar = lazy(() => import('./components/navbar/Navbar'));
const Footer = lazy(() => import('./components/footer/Footer'));

// import ErrorBoundary from './components/errorBoundary/errorBoundary';

function App() {

	return (
		<Router>
			<ScrollToTop/> 
			<div className="App">
				<Navbar/>
					<Suspense fallback={<Spinner/>}>
						<AnimatedSwith/>
					</Suspense>	
				<Footer/>
				<BtnBackToTop/>
			</div>
		</Router>
	);
}

export default App;

// 1.Page404
// 2.Spinner
// 3.ErrorBoundary
// 4.подргузка с загрузкой
// 5.cssTransition
// 0.motion-farmer анимация
// 11.скролл ввех по кнопке

// 6.переделать CV
// 7.модальное окно
// 8.добавить Marvel проект
// 9.Перевод на укр
// 10.React Helmet
// 12.анимация каждого проекта












// без AnimatedSwith без farmer-motion

// import { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import Spinner from './components/spinner/Spinner';
// import ScrollToTop from './utils/scrollToTop';

// import './styles/style.css';

// // import Navbar from './components/navbar/Navbar';
// // import HomePage from './pages/homePage/HomePage';
// // import ProjectsPage from './pages/projectsPage/ProjectsPage';
// // import ContactsPage from './pages/contactsPage/ContactsPage';
// // import SingleProjectPage from './pages/singleProjectPage/SingleProjectPage';
// // import Page404 from './pages/404';
// // import Footer from './components/footer/Footer';

// const Navbar = lazy(() => import('./components/navbar/Navbar'));
// const HomePage = lazy(() => import('./pages/homePage/HomePage'));
// const ProjectsPage = lazy(() => import('./pages/projectsPage/ProjectsPage'));
// const ContactsPage = lazy(() => import('./pages/contactsPage/ContactsPage'));
// const SingleProjectPage = lazy(() => import('./pages/singleProjectPage/SingleProjectPage'));
// const Page404 = lazy(() => import('./pages/404'));
// const Footer = lazy(() => import('./components/footer/Footer'));

// // import ErrorBoundary from './components/errorBoundary/errorBoundary';

// function App() {

// 	return (
// 		<Router>
// 			<ScrollToTop/> 
// 			<div className="App">
// 				<Navbar/>
// 					<Suspense fallback={<Spinner/>}>
// 						<Routes>
// 							<Route path="/" element={<HomePage/>}/>
// 							<Route path="/project" element={<ProjectsPage/>}/>
// 							<Route path="/contacts" element={<ContactsPage/>}/>
// 							<Route path="/project/:id" element={<SingleProjectPage/>}/>
// 							<Route path='*' element={<Page404/>}/>
// 						</Routes>
// 					<Footer/>
// 				</Suspense>		
// 			</div>
// 		</Router>
// 	);
// }

// export default App;