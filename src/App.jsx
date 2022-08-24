import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { Baseview } from './components/Skeleton/Baseview';
import Page404 from "./views/404";
import { Contact } from "./views/Contact";
import { Home } from "./views/Home";
import { ProjectDemo } from "./views/ProjectDemo";
import { Projects } from "./views/Projects";
const App = () => {

  return (
    <Router>
		<Baseview>
      <Routes>
        {/* <Route path="/test2" element={<Route1/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects/:name" element={<ProjectDemo/>}/>
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
