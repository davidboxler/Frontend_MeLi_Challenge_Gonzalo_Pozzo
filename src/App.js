import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import ProductDetails from "./views/ProductDetails";
import ProductCarousel from "./views/ProductCarousel";
import Footer from "./components/Footer";

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
