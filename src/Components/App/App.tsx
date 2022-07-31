import 'assets/stylesheets/css/App.css';
// Components
import Header from 'Components/Header/Header';
import About from 'Components/About/About';
import Hero from 'Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        {/* Hero section */}
        <Hero />

        {/* About section */}
        <About />

      </main>

    </div>
  );
}

export default App;
