// import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './utils/scrollToTo';

import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import ContactsPage from './pages/ContactsPage';
import Footer from './components/footer/Footer';


import './styles/style.css';



function App() {
  return (
	<Router>
		<ScrollToTop/> 
		<div className="App">
			<Navbar/>
				{/* <Suspense> */}
					<Routes>
						<Route path="/" element={<HomePage/>}/>
						<Route path="/projects" element={<ProjectsPage/>}/>
						<Route path="/contacts" element={<ContactsPage/>}/>
						<Route path="/projects/id" element={<ProjectPage/>}/>
						{/* <Route path='*' element={<Page404/>}/> */}
					</Routes>
				<Footer/>
			{/* </Suspense>		 */}
		</div>
	</Router>
  );
}

export default App;
