import Navbar from './components/Navbar/Navbar'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import ProductDetails from './components/ProductDetails/ProductDetails'
import ProductCarousel from './components/ProductCarousel/ProductCarousel'
import Footer from './components/Footer/Footer'
import './App.scss';


function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<main>
				<Breadcrumbs />
				<ProductDetails />
				<ProductCarousel />
			</main>

			<Footer />
		</>
	);
}

export default App;
