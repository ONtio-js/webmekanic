import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import PortfolioPage from './pages/PortfolioPage';
import Layout from './Layout';
function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}
			>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path='/about'
					element={<AboutPage />}
				/>
				<Route
					path='/contact'
					element={<ContactPage />}
				/>
				<Route
					path='/services'
					element={<ServicePage />}
				/>
				<Route
					path='/portfolio'
					element={<PortfolioPage />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
