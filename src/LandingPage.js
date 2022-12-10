import appstorebutton from './download-on-appstore.svg';
import logo from './smileberry-xl.png';
import './App.css';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Lotto 97
        </h2>
      </header>
      <header className="App-header-2">
        <h4>
          Choose your own hardship
        </h4>
        <a
          href="https://apps.apple.com/app/apple-store/id6444911983"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appstorebutton} alt="appstorebutton" className='App-store-button' />
        </a>
      </header>

      <header className="App-footer">
        <Link  to={{pathname: '/privacy'}}>Privacy</Link>
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" > Email us </a>
      </header>
    </div>
  );
}

export default LandingPage;
