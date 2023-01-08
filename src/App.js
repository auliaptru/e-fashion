import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Blog from './components/Blog';
import CompaniesLogo from './components/CompaniesLogo';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <CompaniesLogo />
            <About />
            <Features />
            <Banner />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;
