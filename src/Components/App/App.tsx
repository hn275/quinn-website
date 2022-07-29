import 'assets/stylesheets/css/App.css';
// Components
import Header from 'Components/Header/Header';
import Hero from 'Components/Hero/Hero';
import About from 'Components/About/About';

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
