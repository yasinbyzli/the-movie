import { useState } from "react";
import Header from "./components/Header";
import './sass/_vendors.scss';
import './sass/_app.scss';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <Header isDarkMode = {isDarkMode} setIsDarkMode={setIsDarkMode}/>
      </div>
        
    </div>
  );
}

export default App;
