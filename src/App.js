import './App.css';
import Navbar from './component/navigation/navbar';
import SlideImage from './component/slideImage/slideImage';
import Calculation from './component/track/calculation';
import Motivation from './component/motivation/motivation';
import YesYouCan from './component/yesYouCan/yesYouCan';
import Download from './component/download/download';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div>
      <div className='header-wrapper'>
        <Navbar />
        <SlideImage />
      </div>
      <div>
        <Calculation />
      </div>
      <div>
        <Motivation />
      </div>
      <YesYouCan />
      <Download />
      <Footer />
    </div >
  );
}

export default App;
