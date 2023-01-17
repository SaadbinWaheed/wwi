import logo from './logo.svg';
import './Styles/App.css';
import Header from './Components/Header';
import { useState } from 'react';
import { Home } from './Components/AllTabs/Home';

function App() {
  const [currentTab,setCurrentTab] = useState(0);
  console.log(">>",currentTab)
  return (
    <div className="App">
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab}/>
      <div>
        <p>
          <Home id={0} currentTab={currentTab} />
        </p>
      </div>
    </div>
  );
}

export default App;
