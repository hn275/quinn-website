import 'assets/stylesheets/css/App.css';
// Components
import Header from 'Components/Header/Header';
import About from 'Components/About/About';
import Hero from 'Components/Hero/Hero';
import CTA from 'Components/CTA/CTA';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        {/* Hero section */}
        <Hero />

        {/* CTA */} 
        <CTA />

        {/* About section */}
        <About />


      </main>

    </div>
  );
}

export default App;
