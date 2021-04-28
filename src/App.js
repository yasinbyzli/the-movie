import { useState } from "react";
import Header from "./components/Header";
import './sass/_vendors.scss';
import './sass/_app.scss';
import MovieList from "./components/MovieList";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <Header isDarkMode = {isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
