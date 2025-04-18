import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import PortfolioPage from './pages/PortfolioPage';
import Layout from './Layout';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BlogsPage from './pages/BlogsPage';
import BlogPage from './pages/BlogPage';
import Careers from './pages/CareersPage';

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
					path='https://calendly.com/webmekanic-info/30min'
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
				<Route
					path='/privacy'
					element={<PrivacyPage />}
				/>
				<Route
					path='/terms'
					element={<TermsPage />}
				/>
				<Route
					path='/blogs'
					element={<BlogsPage />}
				/>
				<Route
					path='/blogs/:slug'
					element={<BlogPage />}
				/>
				<Route
					path='/careers'
					element={<Careers />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
