import Header from './components/Header';
import Footer from './components/Footer';
import Converter from './components/Converter';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Converter />
      </main>
      <Footer />
    </>
  );
}

export default App;
