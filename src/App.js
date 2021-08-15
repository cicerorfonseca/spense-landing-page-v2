import './css/normalize.css';
import './css/styles.scss';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import SocialMedia from './components/SocialMedia';
import Escrow from './components/Escrow';
import TextEditor from './components/TextEditor';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroBanner />
      <SocialMedia />
      <Escrow />
      <TextEditor />
      <Footer />
    </div>
  );
}

export default App;
