import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <div className="Header">
      <Header />
    </div>
    <div className="Body">
        <Button />
      </div>
    <div className="Footer">
        <Footer />
    </div>
    </>
  );
};

export default App;