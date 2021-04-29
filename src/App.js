import { useState } from "react";
import Header from "./components/Header";
import "./sass/_vendors.scss";
import "./sass/_app.scss";
import { Switch, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movie/details/:id" exact>
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
