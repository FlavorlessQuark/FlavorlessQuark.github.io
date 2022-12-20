import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Baseview from './components/Skeleton/Baseview';
import Page404 from "./views/404";
import Home from "./views/Home";
import Projects from "./views/Projects";
import PortfolioItem from "./views/PortfolioItem";
import Resume from "./views/Resume";

const App = () => {

  return (
    <Router>
		<Baseview>
      <Routes>
        {/* <Route path="/test2" element={<Route1/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/projects/:project" element={<PortfolioItem/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route
			path="/"
			element={<Navigate to="/home" replace/>}
		/>
        <Route path="/*" element={<Page404/>}/>
      </Routes>
		</Baseview>
    </Router>
  );
}

export default App;
