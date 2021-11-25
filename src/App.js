import Header from './components/Header/header.js';
import AllCompanies from './components/Companies/allCompanies.js';
import Body from './components/Body/body.js';
import About from './components/About/about.js';
import Footer from './components/Footer/footer.js';

function App() {
	return (
		<div className="App">
			<Header />
			<AllCompanies />
			<Body />
			<About />
			<Footer />
		</div>
	);
}

export default App;
